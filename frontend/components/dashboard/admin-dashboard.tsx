"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, BedDouble, CreditCard, UsersRound } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartData, occupancyData } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/stat-card";
import { apiData } from "@/services/api";
import type { DashboardStats } from "@/types";

const fallbackStats: DashboardStats = {
  totalStudents: 1248,
  occupiedRooms: 384,
  vacantRooms: 57,
  pendingComplaints: 31,
  feeCollection: 920000,
  attendanceAverage: 94
};

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>(fallbackStats);

  useEffect(() => {
    apiData<DashboardStats>("/admin/dashboard")
      .then(setStats)
      .catch(() => setStats(fallbackStats));
  }, []);

  const totalRooms = stats.occupiedRooms + stats.vacantRooms;
  const occupancyRate = totalRooms > 0 ? Math.round((stats.occupiedRooms / totalRooms) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Students" value={stats.totalStudents.toLocaleString()} trend="Active student records" icon={UsersRound} />
        <StatCard label="Occupied Rooms" value={stats.occupiedRooms.toLocaleString()} trend={`${occupancyRate}% occupancy`} icon={BedDouble} />
        <StatCard label="Pending Complaints" value={stats.pendingComplaints.toLocaleString()} trend="Open service requests" icon={AlertTriangle} />
        <StatCard label="Fees Collected" value={formatCurrency(stats.feeCollection)} trend={`${stats.attendanceAverage.toFixed(1)}% attendance average`} icon={CreditCard} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fee Collection Analytics</CardTitle>
          </CardHeader>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `${Number(value) / 1000}k`} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
                <Bar dataKey="collected" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Occupancy by Block</CardTitle>
          </CardHeader>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="occupied" stackId="rooms" fill="hsl(var(--primary))" />
                <Bar dataKey="vacant" stackId="rooms" fill="hsl(var(--muted-foreground))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
