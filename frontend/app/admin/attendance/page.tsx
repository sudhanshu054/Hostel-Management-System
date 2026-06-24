"use client";

import { PageHeader } from "@/components/layout/page-header";
import { LiveDataTable } from "@/components/tables/live-data-table";
import { attendance } from "@/lib/sample-data";
import type { Attendance } from "@/types";

export default function AttendancePage() {
  return (
    <>
      <PageHeader title="Attendance" description="Daily attendance, entry and exit logs, leave status, and QR simulations." action="Generate QR" />
      <LiveDataTable<Attendance> endpoint="/admin/attendance" fallbackData={attendance as Attendance[]} mapRow={(row) => ({
        id: String(row.id),
        student: String(row.student),
        date: String(row.date ?? "-"),
        entry: String(row.entry ?? "-"),
        exit: String(row.exit ?? "-"),
        status: String(row.status ?? "-")
      })} columns={[
        { key: "student", label: "Student" },
        { key: "date", label: "Date" },
        { key: "entry", label: "Entry" },
        { key: "exit", label: "Exit" },
        { key: "status", label: "Status" }
      ]} />
    </>
  );
}
