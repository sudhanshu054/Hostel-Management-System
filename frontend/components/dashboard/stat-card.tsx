import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type StatCardProps = {
  label: string;
  value: string;
  trend: string;
  icon: LucideIcon;
};

export function StatCard({ label, value, trend, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-semibold">{value}</p>
          <p className="mt-2 text-xs text-muted-foreground">{trend}</p>
        </div>
        <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
      </div>
    </Card>
  );
}
