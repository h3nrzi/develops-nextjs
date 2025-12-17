import "reflect-metadata";
import { container } from "tsyringe";

import { registerQuestionsModule } from "./modules/questions";
import { registerCoreServices } from "./services";

function registerModules() {
  registerCoreServices();
  registerQuestionsModule();
}

export { container, registerModules };
