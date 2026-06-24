import { AdminDashboard } from "@/components/dashboard/admin-dashboard";
import { PageHeader } from "@/components/layout/page-header";

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" description="Operational overview across hostel blocks, fees, and student activity." />
      <AdminDashboard />
    </>
  );
}
