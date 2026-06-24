export const students = [
  { id: "STU-1001", name: "Aarav Sharma", email: "aarav@student.demo", phone: "9876543210", course: "B.Tech CSE", year: 2, roomNumber: "A-204", feeStatus: "PAID", attendanceRate: 94 },
  { id: "STU-1002", name: "Meera Nair", email: "meera@student.demo", phone: "9876543211", course: "BBA", year: 1, roomNumber: "B-118", feeStatus: "PENDING", attendanceRate: 91 },
  { id: "STU-1003", name: "Kabir Khan", email: "kabir@student.demo", phone: "9876543212", course: "MCA", year: 1, roomNumber: "C-302", feeStatus: "OVERDUE", attendanceRate: 83 }
];

export const rooms = [
  { id: "RM-101", number: "A-204", block: "A Block", floor: 2, category: "DOUBLE", capacity: 2, occupied: 2, status: "FULL" },
  { id: "RM-102", number: "B-118", block: "B Block", floor: 1, category: "DOUBLE", capacity: 2, occupied: 1, status: "AVAILABLE" },
  { id: "RM-103", number: "C-302", block: "C Block", floor: 3, category: "TRIPLE", capacity: 3, occupied: 2, status: "AVAILABLE" },
  { id: "RM-104", number: "D-015", block: "D Block", floor: 0, category: "DORMITORY", capacity: 8, occupied: 0, status: "MAINTENANCE" }
];

export const complaints = [
  { id: "CMP-102", title: "Internet unstable after 9 PM", category: "INTERNET", priority: "HIGH", status: "IN_PROGRESS", studentName: "Aarav Sharma", createdAt: "2026-05-29" },
  { id: "CMP-103", title: "Water leakage near washroom", category: "WATER", priority: "URGENT", status: "ASSIGNED", studentName: "Meera Nair", createdAt: "2026-05-30" },
  { id: "CMP-104", title: "Room cleaning missed", category: "CLEANING", priority: "MEDIUM", status: "OPEN", studentName: "Kabir Khan", createdAt: "2026-05-31" }
];

export const payments = [
  { id: "PAY-801", student: "Aarav Sharma", amount: 42000, status: "PAID", dueDate: "2026-06-10", receipt: "RCPT-801" },
  { id: "PAY-802", student: "Meera Nair", amount: 38000, status: "PENDING", dueDate: "2026-06-10", receipt: "-" },
  { id: "PAY-803", student: "Kabir Khan", amount: 45000, status: "OVERDUE", dueDate: "2026-05-10", receipt: "-" }
];

export const attendance = [
  { id: "ATT-1", student: "Aarav Sharma", date: "2026-05-31", entry: "08:12 PM", exit: "07:40 AM", status: "PRESENT" },
  { id: "ATT-2", student: "Meera Nair", date: "2026-05-31", entry: "07:48 PM", exit: "08:05 AM", status: "PRESENT" },
  { id: "ATT-3", student: "Kabir Khan", date: "2026-05-31", entry: "-", exit: "-", status: "ON_LEAVE" }
];
