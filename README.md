# Hostel Management System

A concise, production-ready full-stack application for managing hostel operations — students, rooms, fees, attendance, complaints and reporting.

## Key features

- Role-based authentication (Admin, Student) with JWT
- Student & room management, check-ins/check-outs
- Fees tracking, attendance and complaints workflow
- Dashboards, reports and notifications
- OpenAPI (Swagger) for backend API documentation
- Docker Compose setup for local development and quick deployment

## Tech stack

- Frontend: Next.js (TypeScript), Tailwind CSS
- Backend: Spring Boot 3, Spring Security, Spring Data JPA
- Database: PostgreSQL
- Tooling: Docker Compose, Swagger/OpenAPI, Zod (validation)

## Quick start (Docker)

1. Build and run containers:

```bash
docker compose up --build -d
```

2. Services:

- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html

## Local development

Frontend

```bash
npm install --prefix frontend
npm run --prefix frontend dev
```

Backend

```bash
./mvnw -f backend spring-boot:run
# or
npm run backend:dev
```

Database

Create a PostgreSQL database (example):

- Name: `hostel_management`
- User: `hostel`
- Password: `hostel_password`

Alternatively, set environment variables to override connection details (see backend application config).

## Environment variables (examples)

- DATABASE_URL or SPRING_DATASOURCE_URL
- SPRING_DATASOURCE_USERNAME
- SPRING_DATASOURCE_PASSWORD
- JWT_SECRET
- NEXT_PUBLIC_API_URL (for deployed frontend)

## Test credentials

- Admin: `admin@hostel.test` / `Admin@123`
- Student: `student@hostel.test` / `Student@123`

## API examples

See: `backend/src/main/resources/sample-requests.http` for sample requests and the live Swagger UI for full API docs.

## Deployment

- Frontend: deploy static Next.js app (Vercel recommended). Set `NEXT_PUBLIC_API_URL` to your backend endpoint.
- Backend: deploy Spring Boot app (Render, Heroku, or any JVM host). Provide PostgreSQL credentials and `JWT_SECRET`.

## Contributing

Contributions are welcome. Please open issues or pull requests with clear descriptions and tests where appropriate.

## License

Specify your license here (e.g., MIT).