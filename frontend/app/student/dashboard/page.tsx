import { StudentDashboard } from "@/components/dashboard/student-dashboard";
import { PageHeader } from "@/components/layout/page-header";

export default function StudentDashboardPage() {
  return (
    <>
      <PageHeader title="My Dashboard" description="Your hostel room, fee, attendance, and notification summary." />
      <StudentDashboard />
    </>
  );
}
