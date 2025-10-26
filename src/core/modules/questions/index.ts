import { container } from "tsyringe";

import { QuestionsController } from "./questions.controller";
import { QuestionsRepository } from "./questions.repository";
import { QuestionsService } from "./questions.service";

export function registerQuestionsModule() {
  container.register("QuestionsRepository", { useClass: QuestionsRepository });
  container.register("QuestionsService", { useClass: QuestionsService });
  container.register(QuestionsController, { useClass: QuestionsController });
}

export { QuestionsController } from "./questions.controller";
export { QuestionsFactory } from "./questions.factory";
export { QuestionsRepository } from "./questions.repository";
export { QuestionsService } from "./questions.service";
