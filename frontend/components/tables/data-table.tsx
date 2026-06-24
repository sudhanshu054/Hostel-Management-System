"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type Column<T> = {
  key: keyof T;
  label: string;
};

type DataTableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

export function DataTable<T extends object>({ columns, data }: DataTableProps<T>) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => data.filter((row) => JSON.stringify(row).toLowerCase().includes(query.toLowerCase())),
    [data, query]
  );

  return (
    <Card className="p-0">
      <div className="flex items-center gap-2 border-b p-4">
        <Search className="size-4 text-muted-foreground" />
        <Input placeholder="Search records" value={query} onChange={(event) => setQuery(event.target.value)} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/60 text-xs uppercase text-muted-foreground">
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)} className="px-4 py-3 font-medium">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, index) => (
              <tr key={index} className="border-t">
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-4 py-3">
                    {String(row[column.key] ?? "-")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
