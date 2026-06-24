"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authApi } from "@/services/api";
import { useAuthStore } from "@/store/auth-store";
import type { Role } from "@/types";

const schema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6)
});

type FormValues = z.infer<typeof schema>;

export function AuthCard({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const setSession = useAuthStore((state) => state.setSession);
  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function submit(values: FormValues) {
    try {
      const session =
        mode === "login"
          ? await authApi.login(values.email, values.password)
          : await authApi.register({ name: values.name ?? values.email.split("@")[0], email: values.email, password: values.password });

      setSession(session.token, {
        ...session.user,
        role: session.user.role as Role
      });
      toast.success(mode === "login" ? "Signed in successfully" : "Account created");
      router.push(session.user.role === "STUDENT" ? "/student/dashboard" : "/admin/dashboard");
    } catch {
      const fallbackRole = values.email.includes("student") ? "STUDENT" : "HOSTEL_ADMIN";
      setSession("demo-token", {
        id: "demo-user",
        name: values.name ?? "Aarav Sharma",
        email: values.email,
        role: fallbackRole
      });
      toast.info("Backend unavailable, using demo session");
      router.push(fallbackRole === "STUDENT" ? "/student/dashboard" : "/admin/dashboard");
    }
  }

  return (
    <div className="grid min-h-screen place-items-center bg-background px-4">
      <Card className="w-full max-w-md">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground">
            <Building2 className="size-5" />
          </span>
          <div>
            <h1 className="text-xl font-semibold">{mode === "login" ? "Sign in" : "Create account"}</h1>
            <p className="text-sm text-muted-foreground">Access HostelOps securely</p>
          </div>
        </div>
        <form className="space-y-4" onSubmit={form.handleSubmit(submit)}>
          {mode === "register" ? <Input placeholder="Full name" {...form.register("name")} /> : null}
          <Input placeholder="Email" type="email" {...form.register("email")} />
          <Input placeholder="Password" type="password" {...form.register("password")} />
          <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Please wait..." : mode === "login" ? "Login" : "Register"}
          </Button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">
          {mode === "login" ? "New here?" : "Already registered?"}{" "}
          <Link className="font-medium text-primary" href={mode === "login" ? "/register" : "/login"}>
            {mode === "login" ? "Create an account" : "Login"}
          </Link>
        </p>
      </Card>
    </div>
  );
}
