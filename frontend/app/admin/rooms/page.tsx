"use client";

import { PageHeader } from "@/components/layout/page-header";
import { LiveDataTable } from "@/components/tables/live-data-table";
import { rooms } from "@/lib/sample-data";
import type { Room } from "@/types";

export default function RoomsPage() {
  return (
    <>
      <PageHeader title="Rooms" description="Track blocks, floors, allocation, occupancy, and maintenance status." action="Allocate Room" />
      <LiveDataTable<Room> endpoint="/admin/rooms" fallbackData={rooms as Room[]} mapRow={(row) => ({
        id: String(row.id),
        number: String(row.number),
        block: String(row.block),
        floor: Number(row.floor ?? 0),
        category: row.category as Room["category"],
        capacity: Number(row.capacity ?? 0),
        occupied: Number(row.occupied ?? 0),
        status: row.status as Room["status"]
      })} columns={[
        { key: "number", label: "Room" },
        { key: "block", label: "Block" },
        { key: "floor", label: "Floor" },
        { key: "category", label: "Category" },
        { key: "occupied", label: "Occupied" },
        { key: "status", label: "Status" }
      ]} />
    </>
  );
}
