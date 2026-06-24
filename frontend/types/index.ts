export type Role = "SUPER_ADMIN" | "HOSTEL_ADMIN" | "WARDEN" | "STUDENT";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  year: number;
  roomNumber?: string;
  feeStatus: "PAID" | "PENDING" | "OVERDUE";
  attendanceRate: number;
};

export type Room = {
  id: string;
  number: string;
  block: string;
  floor: number;
  category: "SINGLE" | "DOUBLE" | "TRIPLE" | "DORMITORY";
  capacity: number;
  occupied: number;
  status: "AVAILABLE" | "FULL" | "MAINTENANCE";
};

export type Complaint = {
  id: string;
  title: string;
  category: "ELECTRICITY" | "WATER" | "INTERNET" | "CLEANING" | "FOOD" | "SECURITY";
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  status: "OPEN" | "ASSIGNED" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  studentName: string;
  createdAt: string;
};

export type DashboardStats = {
  totalStudents: number;
  occupiedRooms: number;
  vacantRooms: number;
  pendingComplaints: number;
  feeCollection: number;
  attendanceAverage: number;
};

export type Payment = {
  id: string;
  student: string;
  amount: number;
  status: "PAID" | "PENDING" | "OVERDUE";
  dueDate: string;
  receipt: string;
};

export type Attendance = {
  id: string;
  student: string;
  date: string;
  entry: string;
  exit: string;
  status: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
};
