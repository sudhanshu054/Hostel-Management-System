import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/page-header";

export default function ProfilePage() {
  return (
    <>
      <PageHeader title="Profile" description="Personal, guardian, course, and emergency contact details." action="Save Changes" />
      <Card>
        <CardHeader>
          <CardTitle>Aarav Sharma</CardTitle>
        </CardHeader>
        <div className="grid gap-3 md:grid-cols-2">
          <Input defaultValue="Aarav Sharma" />
          <Input defaultValue="aarav@student.demo" />
          <Input defaultValue="B.Tech CSE" />
          <Input defaultValue="Guardian: Raj Sharma" />
        </div>
      </Card>
    </>
  );
}
