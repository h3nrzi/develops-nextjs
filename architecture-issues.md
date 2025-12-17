# مشکلات معماری پروژه

## 🔴 مشکلات حیاتی

### 1. تکرار کد و معماری مختلط

- **مشکل**: دو سرویس مختلف برای Questions وجود دارد:
  - `src/core/modules/questions/questions.service.ts` (Domain Layer)
  - `src/services/questions.service.ts` (Client Layer)
- **تأثیر**: باعث confusion و maintenance overhead می‌شود
- **راه‌حل**: یکی از آنها را حذف کرده و یک pattern واحد استفاده کنید

### 2. مشکل در AuthenticatedHttpClient

- **مشکل**: در `http-client.ts` خط 65، کد تکراری و غیرضروری برای تمام HTTP methods
- **تأثیر**: Code duplication و maintainability پایین
- **راه‌حل**: Override کردن `request` method به جای تمام methods

### 3. مشکل در User ID Handling

- **مشکل**: در `questions.repository.ts` خط 38-40، تبدیل string به number به صورت نامناسب

```typescript
const authorIdNum =
  data.authorId.length > 10
    ? Math.abs(data.authorId.split("").reduce((a, b) => a + b.charCodeAt(0), 0))
    : parseInt(data.authorId);
```

- **تأثیر**: ممکن است collision در user IDs ایجاد شود
- **راه‌حل**: استفاده از UUID یا proper mapping strategy

## 🟡 مشکلات متوسط

### 4. Cache Implementation ناقص

- **مشکل**: `CacheService` فقط in-memory است و در production مناسب نیست
- **تأثیر**: در multi-instance deployment کار نمی‌کند
- **راه‌حل**: استفاده از Redis یا external cache

### 5. Error Handling ناکافی

- **مشکل**: در API routes، error handling generic است
- **تأثیر**: debugging سخت و user experience ضعیف
- **راه‌حل**: structured error responses و proper logging

### 6. Validation در چند لایه

- **مشکل**: validation هم در API layer و هم در service layer انجام می‌شود
- **تأثیر**: performance overhead و code duplication
- **راه‌حل**: validation را فقط در یک لایه انجام دهید

## 🟢 مشکلات جزئی

### 7. Missing Type Safety

- **مشکل**: در `cache.service.ts` استفاده از `any` type
- **تأثیر**: type safety کم
- **راه‌حل**: استفاده از generic types

### 8. Inconsistent Naming

- **مشکل**: نام‌گذاری متفاوت در فایل‌های مختلف (فارسی/انگلیسی)
- **تأثیر**: confusion در development team
- **راه‌حل**: یک naming convention واحد

### 9. Missing Database Transactions

- **مشکل**: در `questions.repository.ts` عملیات create بدون transaction
- **تأثیر**: ممکن است data inconsistency ایجاد شود
- **راه‌حل**: استفاده از Prisma transactions

## 📋 توصیه‌های بهبود

### 1. Architecture Cleanup

```
src/
├── core/
│   ├── domain/          # Domain entities & business logic
│   ├── application/     # Use cases & services
│   ├── infrastructure/  # External services & repositories
│   └── presentation/    # Controllers & DTOs
├── lib/                 # Shared utilities
└── app/                 # Next.js app router
```

### 2. Dependency Injection بهتر

- استفاده از interface-based DI
- جداسازی concerns بهتر

### 3. Configuration Management

- centralized config service
- environment-specific settings

### 4. Monitoring & Logging

- structured logging
- performance monitoring
- error tracking

## 🎯 اولویت‌بندی اقدامات

1. **فوری**: حل مشکل duplicate services
2. **مهم**: بهبود User ID handling
3. **متوسط**: پیاده‌سازی proper caching
4. **آینده**: refactoring کل architecture

## 📊 امتیاز کلی معماری: 6/10

**نقاط قوت:**

- استفاده از DI container
- جداسازی concerns تا حدودی
- استفاده از TypeScript

**نقاط ضعف:**

- معماری مختلط
- code duplication
- error handling ضعیف
