import { injectable } from "tsyringe";
import { ZodError, ZodSchema } from "zod";

import { failure, Result, success } from "../base/result";
import { ValidationError } from "../errors";

@injectable()
export class ValidationService {
  validate<T>(schema: ZodSchema<T>, data: unknown): Result<T, ValidationError> {
    try {
      const result = schema.parse(data);
      return success(result);
    } catch (error) {
      if (error instanceof ZodError) {
        const message = error.issues
          .map((e) => `${e.path.join(".")}: ${e.message}`)
          .join(", ");
        return failure(new ValidationError(message));
      }
      return failure(new ValidationError("Validation failed"));
    }
  }
}
