"use client";

import { PageHeader } from "@/components/layout/page-header";
import { LiveDataTable } from "@/components/tables/live-data-table";
import { complaints } from "@/lib/sample-data";
import type { Complaint } from "@/types";

export default function StudentComplaintsPage() {
  return (
    <>
      <PageHeader title="Complaints" description="Raise complaints and follow resolution history." action="New Complaint" />
      <LiveDataTable<Complaint> endpoint="/admin/complaints" fallbackData={complaints.slice(0, 2) as Complaint[]} mapRow={(row) => ({
        id: String(row.id),
        title: String(row.title),
        category: row.category as Complaint["category"],
        priority: row.priority as Complaint["priority"],
        status: row.status as Complaint["status"],
        studentName: String(row.studentName ?? "-"),
        createdAt: String(row.createdAt ?? "-")
      })} columns={[
        { key: "id", label: "ID" },
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
        { key: "priority", label: "Priority" },
        { key: "status", label: "Status" }
      ]} />
    </>
  );
}
