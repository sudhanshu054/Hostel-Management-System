import {
  Bell,
  BedDouble,
  CalendarCheck,
  CreditCard,
  FileBarChart,
  Home,
  LayoutDashboard,
  MessageSquareWarning,
  Settings,
  UserRound,
  UsersRound
} from "lucide-react";

export const adminNavigation = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Students", href: "/admin/students", icon: UsersRound },
  { label: "Rooms", href: "/admin/rooms", icon: BedDouble },
  { label: "Complaints", href: "/admin/complaints", icon: MessageSquareWarning },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Attendance", href: "/admin/attendance", icon: CalendarCheck },
  { label: "Reports", href: "/admin/reports", icon: FileBarChart },
  { label: "Settings", href: "/admin/settings", icon: Settings }
] as const;

export const studentNavigation = [
  { label: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
  { label: "My Room", href: "/student/my-room", icon: Home },
  { label: "Fees", href: "/student/fees", icon: CreditCard },
  { label: "Complaints", href: "/student/complaints", icon: MessageSquareWarning },
  { label: "Attendance", href: "/student/attendance", icon: CalendarCheck },
  { label: "Notifications", href: "/student/notifications", icon: Bell },
  { label: "Profile", href: "/student/profile", icon: UserRound }
] as const;

export const chartData = [
  { month: "Jan", collected: 680000, pending: 110000 },
  { month: "Feb", collected: 730000, pending: 95000 },
  { month: "Mar", collected: 795000, pending: 76000 },
  { month: "Apr", collected: 845000, pending: 61000 },
  { month: "May", collected: 882000, pending: 54000 },
  { month: "Jun", collected: 920000, pending: 43000 }
];

export const occupancyData = [
  { name: "A Block", occupied: 88, vacant: 12 },
  { name: "B Block", occupied: 72, vacant: 28 },
  { name: "C Block", occupied: 94, vacant: 6 },
  { name: "D Block", occupied: 64, vacant: 36 }
];
