import "reflect-metadata";
import { container } from "tsyringe";

import { registerQuestionsModule } from "./modules/questions";
import { registerCoreServices } from "./services";

export function registerModules() {
  registerCoreServices();
  registerQuestionsModule();
}

export { container };
