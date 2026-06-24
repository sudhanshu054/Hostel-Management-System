"use client";

import { PageHeader } from "@/components/layout/page-header";
import { LiveDataTable } from "@/components/tables/live-data-table";
import { payments } from "@/lib/sample-data";
import type { Payment } from "@/types";

export default function PaymentsPage() {
  return (
    <>
      <PageHeader title="Payments" description="Monitor fee structures, dues, receipts, and collection performance." action="Generate Invoice" />
      <LiveDataTable<Payment> endpoint="/admin/payments" fallbackData={payments as Payment[]} mapRow={(row) => ({
        id: String(row.id),
        student: String(row.student),
        amount: Number(row.amount ?? 0),
        status: row.status as Payment["status"],
        dueDate: String(row.dueDate ?? "-"),
        receipt: String(row.receipt ?? "-")
      })} columns={[
        { key: "id", label: "Payment" },
        { key: "student", label: "Student" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
        { key: "dueDate", label: "Due" },
        { key: "receipt", label: "Receipt" }
      ]} />
    </>
  );
}
