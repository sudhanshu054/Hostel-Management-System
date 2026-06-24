import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <PageHeader title="Contact" description="Reach the hostel administration desk." />
      <Card className="space-y-3">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Message" />
        <Button>Send</Button>
      </Card>
    </main>
  );
}
