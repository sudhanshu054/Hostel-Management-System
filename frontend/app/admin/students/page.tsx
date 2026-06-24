"use client";

import { PageHeader } from "@/components/layout/page-header";
import { LiveDataTable } from "@/components/tables/live-data-table";
import { students } from "@/lib/sample-data";
import type { Student } from "@/types";

export default function StudentsPage() {
  return (
    <>
      <PageHeader title="Students" description="Manage student profiles, documents, guardians, and hostel lifecycle." action="Add Student" />
      <LiveDataTable<Student> endpoint="/admin/students" fallbackData={students as Student[]} mapRow={(row) => ({
        id: String(row.id),
        name: String(row.name),
        email: String(row.email),
        phone: String(row.phone ?? "-"),
        course: String(row.course),
        year: Number(row.year ?? 0),
        roomNumber: String(row.roomNumber ?? "-"),
        feeStatus: "PENDING",
        attendanceRate: 0
      })} columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "course", label: "Course" },
        { key: "roomNumber", label: "Room" },
        { key: "feeStatus", label: "Fee" },
        { key: "attendanceRate", label: "Attendance %" }
      ]} />
    </>
  );
}
