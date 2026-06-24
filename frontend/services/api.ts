const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api/v1";

type RequestOptions = RequestInit & {
  token?: string | null;
};

export type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
};

export type PageResponse<T> = {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
};

export async function api<T>(path: string, options: RequestOptions = {}): Promise<ApiEnvelope<T>> {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  if (options.token) {
    headers.set("Authorization", `Bearer ${options.token}`);
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    cache: "no-store"
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message ?? "Request failed");
  }

  return response.json() as Promise<ApiEnvelope<T>>;
}

export async function apiData<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const result = await api<T>(path, options);

  if (!result.success) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function apiPage<T>(path: string, options: RequestOptions = {}): Promise<T[]> {
  const page = await apiData<PageResponse<T>>(path, options);
  return page.content;
}

export const authApi = {
  login: (email: string, password: string) =>
    apiData<{ token: string; user: { id: string; name: string; email: string; role: string } }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    }),
  register: (payload: { name: string; email: string; password: string }) =>
    apiData<{ token: string; user: { id: string; name: string; email: string; role: string } }>("/auth/register", {
      method: "POST",
      body: JSON.stringify({ ...payload, role: "STUDENT" })
    })
};
