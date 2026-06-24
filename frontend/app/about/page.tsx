import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <PageHeader title="About HostelOps" description="A full-stack hostel management system for modern campus operations." />
      <div className="grid gap-4 md:grid-cols-3">
        {["Secure RBAC", "Operational Analytics", "Student Self Service"].map((item) => (
          <Card key={item}>
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Built for scalable administration and responsive student workflows.</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
