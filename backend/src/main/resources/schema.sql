create extension if not exists "uuid-ossp";

-- Hibernate manages tables in development with ddl-auto=update.
-- This file documents the normalized PostgreSQL domain model:
-- users, students, hostel_blocks, rooms, allocations, payments,
-- complaints, attendance, notifications, leave_requests, admin_logs.
