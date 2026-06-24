"use client";

import { Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import { LiveDataTable } from "@/components/tables/live-data-table";
import type { NotificationItem } from "@/types";

const fallbackNotifications: NotificationItem[] = [
  { id: "NOT-1", title: "Fee receipt generated", message: "Your latest receipt is ready.", read: false, createdAt: "2026-06-05" },
  { id: "NOT-2", title: "Complaint assigned", message: "Complaint CMP-102 assigned to Warden.", read: false, createdAt: "2026-06-05" },
  { id: "NOT-3", title: "Mess menu updated", message: "Sunday mess menu updated.", read: true, createdAt: "2026-06-05" }
];

export default function NotificationsPage() {
  return (
    <>
      <PageHeader title="Notifications" description="In-app announcements, fee reminders, and complaint updates." />
      <div className="space-y-3">
        <Card className="flex items-center gap-3">
            <Bell className="size-5 text-primary" />
            <span className="text-sm">Notifications sync with backend announcements when the API is running.</span>
        </Card>
        <LiveDataTable<NotificationItem> endpoint="/students/notifications" fallbackData={fallbackNotifications} mapRow={(row) => ({
          id: String(row.id),
          title: String(row.title),
          message: String(row.message ?? "-"),
          read: Boolean(row.read),
          createdAt: String(row.createdAt ?? "-")
        })} columns={[
          { key: "title", label: "Title" },
          { key: "message", label: "Message" },
          { key: "read", label: "Read" },
          { key: "createdAt", label: "Created" }
        ]} />
      </div>
    </>
  );
}
