# Hostel Management System

Production-grade full-stack scaffold for hostel administration and student operations.

## Stack

- Frontend: Next.js 15, TypeScript, Tailwind CSS, ShadCN-style reusable components, Zustand, Recharts, Zod
- Backend: Spring Boot 3, Spring Security, JWT, Spring Data JPA, Jakarta Validation
- Database: PostgreSQL
- Tooling: Docker Compose, OpenAPI Swagger UI, seed data, environment-based config

## Quick Start

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Swagger: http://localhost:8080/swagger-ui.html

## Test Credentials

- Admin: `admin@hostel.test` / `Admin@123`
- Student: `student@hostel.test` / `Student@123`

## Local Development

```bash
npm install --prefix frontend
npm run frontend:dev
npm run backend:dev
```

Create PostgreSQL database `hostel_management` with user `hostel` and password `hostel_password`, or override values with environment variables.

## Deployment

- Vercel frontend: set `NEXT_PUBLIC_API_URL=https://your-render-service.onrender.com/api/v1`
- Render backend: deploy `backend/`, set PostgreSQL connection variables and `JWT_SECRET`
- PostgreSQL: use Render PostgreSQL or any managed PostgreSQL 16-compatible database

## API Samples

See [backend/src/main/resources/sample-requests.http](backend/src/main/resources/sample-requests.http).

## Modules Included

Authentication, dashboards, student management, room management, fees, complaints, attendance, notifications, reports, settings, audit-ready entities, AI room recommendation stub, and Swagger API documentation.
