import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";

export default function MyRoomPage() {
  return (
    <>
      <PageHeader title="My Room" description="Room details, roommate allocation, and maintenance state." />
      <Card>
        <CardHeader>
          <CardTitle>A-204, A Block</CardTitle>
        </CardHeader>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <p>Category: Double</p>
          <p>Floor: 2</p>
          <p>Roommate: Rohan Patel</p>
          <p>Status: Active allocation</p>
        </div>
      </Card>
    </>
  );
}
