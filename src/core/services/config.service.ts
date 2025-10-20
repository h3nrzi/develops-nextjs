import { injectable } from "tsyringe";

@injectable()
export class ConfigService {
  get(key: string, defaultValue?: string): string {
    return process.env[key] ?? defaultValue ?? "";
  }

  getNumber(key: string, defaultValue?: number): number {
    const value = process.env[key];
    return value ? parseInt(value, 10) : (defaultValue ?? 0);
  }

  getBoolean(key: string, defaultValue?: boolean): boolean {
    const value = process.env[key];
    return value ? value.toLowerCase() === "true" : (defaultValue ?? false);
  }

  isDevelopment(): boolean {
    return this.get("NODE_ENV") === "development";
  }

  isProduction(): boolean {
    return this.get("NODE_ENV") === "production";
  }
}
