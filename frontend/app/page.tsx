import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" />
            JWT, RBAC, analytics, reports, and audit logs
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-normal sm:text-6xl">HostelOps</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            A secure hostel administration platform for student records, room allocation, fees, complaints, attendance,
            notifications, and operational analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              href="/login"
            >
              Open Console <ArrowRight className="size-4" />
            </Link>
            <Link className="inline-flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-muted" href="/about">
              View Modules
            </Link>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground">
                <Building2 className="size-5" />
              </span>
              <div>
                <p className="font-semibold">Operations Snapshot</p>
                <p className="text-sm text-muted-foreground">Today, 8:30 PM</p>
              </div>
            </div>
            <Sparkles className="size-5 text-accent" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Students", "1,248"],
              ["Occupancy", "87%"],
              ["Pending dues", "43"],
              ["Open complaints", "31"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-2 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
