"use client";

import { PageHeader } from "@/components/layout/page-header";
import { LiveDataTable } from "@/components/tables/live-data-table";
import { attendance } from "@/lib/sample-data";
import type { Attendance } from "@/types";

export default function StudentAttendancePage() {
  return (
    <>
      <PageHeader title="Attendance" description="Entry logs, leave records, and attendance summaries." action="Request Leave" />
      <LiveDataTable<Attendance> endpoint="/admin/attendance" fallbackData={attendance.slice(0, 1) as Attendance[]} mapRow={(row) => ({
        id: String(row.id),
        student: String(row.student),
        date: String(row.date ?? "-"),
        entry: String(row.entry ?? "-"),
        exit: String(row.exit ?? "-"),
        status: String(row.status ?? "-")
      })} columns={[
        { key: "date", label: "Date" },
        { key: "entry", label: "Entry" },
        { key: "exit", label: "Exit" },
        { key: "status", label: "Status" }
      ]} />
    </>
  );
}
