"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/tables/data-table";
import { apiPage } from "@/services/api";
import { useAuthStore } from "@/store/auth-store";

type Column<T> = {
  key: keyof T;
  label: string;
};

type LiveDataTableProps<T extends object> = {
  columns: Column<T>[];
  endpoint: string;
  fallbackData: T[];
  mapRow?: (row: Record<string, unknown>) => T;
};

export function LiveDataTable<T extends object>({
  columns,
  endpoint,
  fallbackData,
  mapRow
}: LiveDataTableProps<T>) {
  const [data, setData] = useState<T[]>(fallbackData);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<"api" | "sample">("sample");
  const [error, setError] = useState<string | null>(null);
  const token = useAuthStore((state) => state.token);

  const normalizedEndpoint = useMemo(
    () => (endpoint.includes("?") ? `${endpoint}&size=50` : `${endpoint}?size=50`),
    [endpoint]
  );

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const rows = await apiPage<Record<string, unknown>>(normalizedEndpoint, { token });
      setData(mapRow ? rows.map(mapRow) : (rows as T[]));
      setSource("api");
      setError(null);
    } catch (caught) {
      setData(fallbackData);
      setSource("sample");
      setError(caught instanceof Error ? caught.message : "Backend is unavailable");
    } finally {
      setLoading(false);
    }
  }, [fallbackData, mapRow, normalizedEndpoint, token]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="space-y-3">
      <Card className="flex flex-col gap-3 border-dashed bg-muted/25 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3 text-sm">
          <AlertCircle className={source === "api" ? "mt-0.5 size-4 text-emerald-600" : "mt-0.5 size-4 text-amber-600"} />
          <div>
            <p className="font-medium">{source === "api" ? "Live backend data" : "Sample data shown"}</p>
            <p className="text-muted-foreground">
              {source === "api" ? "Loaded from the Spring Boot API." : error ?? "Start the backend to load live records."}
            </p>
          </div>
        </div>
        <Button variant="secondary" onClick={() => void load()} disabled={loading}>
          <RefreshCw className={loading ? "size-4 animate-spin" : "size-4"} />
          Refresh
        </Button>
      </Card>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
