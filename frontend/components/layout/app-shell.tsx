"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, LogOut, Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { adminNavigation, studentNavigation } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";

type AppShellProps = {
  role: "admin" | "student";
  children: React.ReactNode;
};

export function AppShell({ role, children }: AppShellProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const navigation = role === "admin" ? adminNavigation : studentNavigation;

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    setDark((value) => !value);
  }

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 border-r bg-card px-4 py-5 transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Link href="/" className="mb-8 flex items-center gap-3 px-2">
          <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground">
            <Building2 className="size-5" />
          </span>
          <div>
            <p className="font-semibold">HostelOps</p>
            <p className="text-xs text-muted-foreground">Multi-hostel administration</p>
          </div>
        </Link>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                  active && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {open && <button className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setOpen(false)} />}

      <main className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur lg:px-8">
          <Button variant="ghost" className="px-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation">
            <Menu className="size-5" />
          </Button>
          <div>
            <p className="text-sm text-muted-foreground">Welcome back</p>
            <h1 className="text-lg font-semibold">{role === "admin" ? "Admin Console" : "Student Portal"}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="px-3" onClick={toggleTheme} aria-label="Toggle theme">
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button variant="ghost" className="px-3" onClick={logout} aria-label="Logout">
              <LogOut className="size-4" />
            </Button>
          </div>
        </header>
        <div className="px-4 py-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
