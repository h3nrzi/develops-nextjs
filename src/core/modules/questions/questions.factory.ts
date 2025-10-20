import { container } from "tsyringe";

import { QuestionsController } from "./questions.controller";

export class QuestionsFactory {
  static create(): QuestionsController {
    return container.resolve(QuestionsController);
  }
}
