Create a new project for e-commerce in the `/fe` folder. These projects are perfect for applying clean architecture and micro-frontend principles.

### Micro-Frontend Overview

- Module Federation Micro-Frontend Architecture
- Each service is its own React.js, Next.js + TypeScript app:
  - User Service (Auth, Profile)
  - Product Service (CRUD products, categories, inventory)
  - Order Service (Cart, Checkout, Order Management)
  - Payment Service (Handle transactions)
  - Notification Service (Emails, SMS, etc.)

### Common Tech Stack

- Module Federation + Webpack
- React.js, Next.js + TypeScript — core runtime + type safety
- Redux Toolkit — state management
- Docker — containerization

### Clean Architecture Layers

Each service has this structure:

```
/src
  /application  ← Use cases (business logic)
  /domain       ← Entities & interfaces
  /infrastructure ← External services (db, Redis, MQ, APIs)
  /presentation ← Express controllers, routes
  /config       ← Env, logger, DI setup
  index.ts      ← App entry
```

### Event-Driven Examples (RabbitMQ)

- OrderCreated → triggers ReduceInventory, SendConfirmationEmail
- ProductStockLow → notifies admin / auto-replenish
- UserSignedUp → sends welcome email, analytics tracking

### Testing Strategies

- Unit Tests: Focus on individual use cases and domain logic.
- Integration Tests: Validate interactions between layers (e.g., application and infrastructure).
- End-to-End Tests: Ensure micro-frontends work together seamlessly.
- Mock External Services: Use tools like MSW or custom mocks for APIs, RabbitMQ, and databases.
- CI/CD Integration: Automate tests for every service in the pipeline.
