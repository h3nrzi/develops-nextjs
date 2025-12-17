# Backend Architecture Overview

This project uses a layered, dependency-injected backend built on Next.js App Router API routes and Prisma.

## Request Flow

- **API adapters** (`src/app/api/**/route.ts`): call `registerModules()`, validate input with `ValidationService` + zod, resolve controllers via factories, and map domain errors (`AppError` subclasses) to HTTP responses.
- **Controllers** (`src/core/modules/**/questions.controller.ts`): thin façade; delegate to services.
- **Services** (`src/core/modules/**/questions.service.ts`): domain logic, caching, logging, cache invalidation, and orchestration of repository calls.
- **Repositories** (`src/core/modules/**/questions.repository.ts`): data access with Prisma, inherit shared DB error handling from `BaseRepository`.
- **Prisma client** (`src/core/prisma-client.ts`): singleton in dev, new instance in production.

## Dependency Injection

- DI container via **tsyringe** (`src/core/container.ts`): registers core services (`registerCoreServices`) and domain modules (`registerQuestionsModule`).
- **Factories** (e.g., `QuestionsFactory`) resolve controllers from the container to keep API adapters decoupled from concrete implementations.

## Core Building Blocks

- **Result pattern** (`src/core/base/result.ts`): `success` / `failure` wrappers to standardize validation outcomes.
- **Errors** (`src/core/errors/index.ts`): `AppError` base plus `NotFoundError`, `ValidationError`, `DatabaseError` for consistent HTTP mapping.
- **Services** (`src/core/services/*`):
  - `ValidationService` wraps zod, returns `Result`.
  - `Logger` basic leveled logging.
  - `ConfigService` env accessors.
  - `CacheService` in-memory TTL cache (suitable for single instance).

## Example Domain Module: Questions

- **Models/DTOs** (`questions.model.ts`): request/response types.
- **Repository** (`questions.repository.ts`): Prisma CRUD, tag connect-or-create, view increment, user upsert.
- **Service** (`questions.service.ts`): cache read/write, logging, async view increment, cache invalidation.
- **Controller** (`questions.controller.ts`): exposes methods used by API routes.
- **Registration** (`index.ts`): wires repository → service → controller in the container.

## Input Validation & Schemas

- Zod schemas in `src/lib/schemas/question.schema.ts`; API routes call `ValidationService` before touching domain logic.

## How to Reuse This Architecture in Another Project

1. Set up a DI container (tsyringe) that registers shared services (logger, config, validation, cache) and each domain module.
2. For every domain, mirror the structure: `*.model` (types), `*.repository` (data), `*.service` (domain rules + cache/log), `*.controller` (entry point), `index.ts` (registration), optional `*.factory` for resolution.
3. Keep API adapters thin: `registerModules()`, validate, `Factory.create()`, handle `AppError` to HTTP.
4. Centralize errors and Result helpers so adapters have a single error-contract to translate.
5. Share infra concerns in base classes (`BaseRepository` for DB/error wrapping, shared Prisma client or other adapters).
