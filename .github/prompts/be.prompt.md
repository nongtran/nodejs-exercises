Create a new project e-commerce projects into folder `/be` are perfect for applying clean architecture and microservices with event-driven design

### Microservices Overview

- Each service is its own Node.js + TypeScript app:
- User Service (Auth, Profile)
- Product Service (CRUD products, categories, inventory)
- Order Service (Cart, Checkout, Order Management)
- Payment Service (Handle transactions)
- Notification Service (Emails, SMS, etc.)
- API Gateway (Routes requests, auth validation, rate-limiting, etc.)

### Common Tech Stack

- Node.js + TypeScript — core runtime + type safety
- Express — HTTP layer (can switch to Fastify if needed)
- MongoDB — primary data store
- Redis — caching, rate limiting, sessions
- RabbitMQ — async communication between services
- Docker — containerization
- Postman/Insomnia — API testing

### Clean Architecture Layers

Each service has this structure:

```
/src
  /application  ← Use cases (business logic)
  /domain       ← Entities & interfaces
  /infrastructure ← External services (db, redis, mq, APIs)
  /presentation ← Express controllers, routes
  /config       ← Env, logger, DI setup
  index.ts      ← App entry
```

### Event-Driven Examples (RabbitMQ)

- OrderCreated → triggers ReduceInventory, SendConfirmationEmail
- ProductStockLow → notifies admin / auto-replenish
- UserSignedUp → send welcome email, analytics tracking
