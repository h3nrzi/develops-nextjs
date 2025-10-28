import { headers, cookies } from "next/headers";

export interface HttpError {
  message: string;
  status: number;
  code?: string;
}

export class HttpClientError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string,
  ) {
    super(message);
    this.name = "HttpClientError";
  }
}

class HttpClient {
  private readonly defaultHeaders = { "Content-Type": "application/json" };

  private async getBaseUrl(): Promise<string> {
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    return `${protocol}://${host}`;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const baseUrl = await this.getBaseUrl();
    const url = `${baseUrl}${endpoint}`;

    const config: RequestInit = {
      cache: "no-store",
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new HttpClientError(
          response.status,
          errorData.error || `HTTP ${response.status}: ${response.statusText}`,
          errorData.code,
        );
      }

      const data = await response.json();
      return data.data ?? data;
    } catch (error) {
      if (error instanceof HttpClientError) throw error;
      throw new HttpClientError(500, "Network or parsing error");
    }
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      method: "GET",
      ...options,
    });
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      method: "DELETE",
      ...options,
    });
  }
}

// HTTP client with authentication for server-side requests
class AuthenticatedHttpClient extends HttpClient {
  private async getAuthHeaders(): Promise<Record<string, string>> {
    const cookieStore = await cookies();
    return {
      Cookie: cookieStore.toString(),
    };
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const authHeaders = await this.getAuthHeaders();
    return super.get<T>(endpoint, {
      ...options,
      headers: { ...authHeaders, ...options?.headers },
    });
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    const authHeaders = await this.getAuthHeaders();
    return super.post<T>(endpoint, data, {
      ...options,
      headers: { ...authHeaders, ...options?.headers },
    });
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    const authHeaders = await this.getAuthHeaders();
    return super.put<T>(endpoint, data, {
      ...options,
      headers: { ...authHeaders, ...options?.headers },
    });
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const authHeaders = await this.getAuthHeaders();
    return super.delete<T>(endpoint, {
      ...options,
      headers: { ...authHeaders, ...options?.headers },
    });
  }
}

export const httpClient = new HttpClient();
export const authenticatedHttpClient = new AuthenticatedHttpClient();
