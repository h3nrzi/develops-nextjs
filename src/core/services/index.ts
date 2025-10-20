import { container } from "tsyringe";

import { CacheService } from "./cache.service";
import { ConfigService } from "./config.service";
import { Logger } from "./logger.service";
import { ValidationService } from "./validation.service";

export function registerCoreServices() {
  container.register("ValidationService", { useClass: ValidationService });
  container.register("Logger", { useClass: Logger });
  container.register("ConfigService", { useClass: ConfigService });
  container.register("CacheService", { useClass: CacheService });
}
