import { Bell, CalendarCheck, CreditCard, Home } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/stat-card";

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Room" value="A-204" trend="Double sharing, floor 2" icon={Home} />
        <StatCard label="Fee Status" value="Paid" trend="Next due on 10 Jul" icon={CreditCard} />
        <StatCard label="Attendance" value="94%" trend="Current month average" icon={CalendarCheck} />
        <StatCard label="Notifications" value="5" trend="2 unread updates" icon={Bell} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <div className="space-y-4 text-sm">
            {["Complaint #CMP-102 moved to in progress", "May hostel fee receipt generated", "Gate entry recorded at 8:12 PM"].map((item) => (
              <div key={item} className="rounded-md border p-3">
                {item}
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Smart Room Recommendation</CardTitle>
          </CardHeader>
          <p className="text-sm text-muted-foreground">
            Based on quiet-hours preference, course year, and current occupancy, B-118 is the best available reassignment.
          </p>
        </Card>
      </div>
    </div>
  );
}
