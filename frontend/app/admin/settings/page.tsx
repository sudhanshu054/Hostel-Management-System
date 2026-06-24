import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/page-header";

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" description="Configure hostel rules, fees, templates, users, and audit controls." />
      <div className="grid gap-4 lg:grid-cols-2">
        {["Hostel Configuration", "Fee Settings", "Notification Templates", "User Management"].map((section) => (
          <Card key={section}>
            <CardHeader>
              <CardTitle>{section}</CardTitle>
            </CardHeader>
            <div className="space-y-3">
              <Input placeholder={`${section} name`} />
              <Input placeholder="Default value" />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
