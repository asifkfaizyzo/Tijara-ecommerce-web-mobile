# Tijara

Tijara is a **B2B credit-based chemical booking system** built for operational simplicity, speed, and manual control.

This repository is a **monorepo** containing:
- a NestJS backend
- a Next.js admin web app
- a React Native (Expo) mobile app for Android & iOS

The project is intentionally designed to avoid over-automation and instead match real-world business workflows.

---

## 🧠 Product Overview

### What Tijara is
- A **mobile-first ordering app** for customers
- A **desktop admin panel** for internal operations
- No online payments
- Orders are fulfilled manually using the company’s own delivery vehicles
- Payments are collected offline and marked manually by admins

### What Tijara is NOT
- Not a fintech or wallet app
- Not a logistics tracking platform
- Not a marketplace
- Not an accounting system

---

## 📱 Customer Mobile App (Android + iOS)

### Core features
- Phone-based authentication (SMS OTP)
- Persistent login (no repeated password prompts)
- Browse a small catalog (< 20 products)
- Add items to cart with quantity
- Place orders **without online payment**
- Credit-based usage (pay on delivery)
- Save multiple delivery locations using live map selection
- View order history
- View order delivery status (manual admin updates)
- View payment status (paid / pending)

### Delivery flow
- No live tracking
- Admin manually updates status:
  - Placed → Packed → On the Way → Delivered
- Optional **delivery OTP** flow (draft feature, may be enabled later)

### Notifications
- Push notifications (Firebase)
- In-app notifications
- SMS / WhatsApp / Email (triggered manually by admin)

---

## 🖥️ Admin Web App (Desktop Only)

### Core features
- Product CRUD (manual control)
- User management
  - View user order history
  - View pending payments
- Order management
  - View new orders
  - Update delivery status
  - Mark orders as paid / unpaid
- Notification center
  - Send custom messages
  - Target single users, groups, or all users
  - Choose channels: push, SMS, WhatsApp, email
- Broadcast announcements (manual only)

No automation-heavy workflows. Admins stay in control.

---

## 🏗️ Architecture Overview

### Frontend
- **Mobile App**: React Native + Expo
- **Admin Web**: Next.js (App Router)

### Backend
- NestJS (Node.js)
- PostgreSQL
- Prisma ORM
- Redis
- BullMQ (queues for notifications)

### Notifications
- Push: Firebase Cloud Messaging (FCM)
- SMS: Provider TBD
- WhatsApp: WhatsApp Business API
- Email: SMTP / SES

---

## 📦 Monorepo Structure

```
tijara/
├── apps/
│ ├── backend/ # NestJS API
│ ├── admin-web/ # Next.js admin panel
│ └── mobile-app/ # React Native (Expo) app
│
├── packages/
│ ├── shared-types/ # Shared enums & DTOs
│ └── ui-tokens/ # Design tokens (colors, spacing, typography)
│
├── infra/
│ ├── docker/ # Infra-related configs
│ ├── nginx/
│ └── scripts/
│
├── docs/ # Architecture & product docs
├── docker-compose.yml # Postgres + Redis
├── .nvmrc # Node.js version lock (20.x)
├── .env.example
└── README.md
```


---

## 🐳 Docker Usage (Development)

Docker is used **only for infrastructure**, not frontend dev.

### What runs in Docker
- PostgreSQL 15
- Redis 7

### What runs locally
- NestJS backend
- Next.js admin web
- Expo mobile app

### Start infra
```bash
docker-compose up -d
```

### Stop infra
```
docker-compose down
```

This guarantees identical environments across Mac and Windows.

🔐 Authentication Strategy
Customers

Phone number + SMS OTP

Password set once (fallback only)

JWT access + refresh tokens

Persistent login

Admins

Email + password

Role-based access

🎯 Design Principles

Manual > automatic

Predictable > clever

Fast > fancy

Real-world workflows > theoretical purity

This project favors clarity, control, and reliability over complexity.

📌 Project Status

✅ Monorepo initialized

✅ Docker infra ready (Postgres + Redis)

⏳ Backend scaffolding next

⏳ Frontend scaffolding later

⏳ Notifications system design pending

🧭 Next Steps

Scaffold NestJS backend

Connect backend to Docker Postgres

Add Prisma schema

Implement authentication

Build core order flow

⚠️ Important Notes

Do NOT add online payments unless explicitly requested

Do NOT auto-send notifications without admin action

Delivery OTP is optional and feature-flagged

Keep SKU count intentionally small

📄 License

Private project. Not for redistribution.


