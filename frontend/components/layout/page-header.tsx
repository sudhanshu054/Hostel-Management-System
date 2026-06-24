import { Button } from "@/components/ui/button";

type PageHeaderProps = {
  title: string;
  description: string;
  action?: string;
};

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-2xl font-semibold tracking-normal">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {action ? <Button>{action}</Button> : null}
    </div>
  );
}
