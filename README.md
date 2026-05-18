# AuditAI

AI-powered business intelligence platform that analyzes company websites, generates operational insights, creates executive-grade PDF reports, and automatically delivers them via email.

---

## Live Demo

**[View Live Project](https://audit-ai-lemon.vercel.app/)**

---

## Overview

AuditAI is a modern full-stack AI workflow application designed to automate business audit generation.

Users submit company details through a SaaS-style interface, and the platform automatically:

* Scrapes website data
* Extracts business insights
* Uses AI to analyze operations
* Detects automation opportunities
* Generates professional PDF reports
* Emails reports instantly

The entire workflow is fully automated and requires no manual intervention.

---

## Features

### AI Business Analysis

* Company overview generation
* Operational bottleneck detection
* Automation opportunity analysis
* Strategic recommendations
* AI tool suggestions

### Full Workflow Automation

* Website scraping
* AI processing
* PDF generation
* Automatic email delivery

### Modern UI/UX

* Responsive SaaS-inspired design
* Smooth loading states
* Interactive sections
* Feature highlights
* Professional landing page

### PDF Reporting

* Executive-style PDF reports
* Structured business insights
* Downloadable reports
* Email attachments

---

## Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Font Awesome

### Backend

* Next.js API Routes
* Node.js

### AI Integration

* Puter AI / Grok API

### PDF Generation

* @react-pdf/renderer

### Email Service

* Resend

### Utilities

* Cheerio
* Zod

---

## Architecture Workflow

```txt
User Submission
       ↓
Website Scraping
       ↓
AI Analysis Generation
       ↓
Structured JSON Audit
       ↓
PDF Report Creation
       ↓
Email Delivery + Download
```

---

## Project Structure

```txt
src/
├── app/
│   ├── api/
│   │   ├── finalize/
│   │   │   └── route.tsx
│   │   └── submit/
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── FeaturesSection.tsx
│   ├── HeroSection.tsx
│   ├── LeadForm.tsx
│   ├── LoadingOverlay.tsx
│   ├── Navbar.tsx
│   ├── ReportTemplate.tsx
│   └── StatsSection.tsx
│
├── lib/
│   ├── client-ai.ts
│   ├── scrape.ts
│   └── sendEmail.ts
│
└── types/
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/kaix-404/audit_ai.git
```

---

### 2. Navigate Into Project

```bash
cd audit_ai
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Configure Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_APP_URL=https://audit-ai-lemon.vercel.app
```

---

### 5. Run Development Server

```bash
npm run dev
```

---

## API Routes

### `/api/submit`

Handles:

* Form validation
* Website scraping
* AI audit generation

### `/api/finalize`

Handles:

* PDF generation
* Email delivery
* Download link generation

---

## Challenges Faced

### AI Response Formatting

AI occasionally returned malformed JSON responses. This was solved through strict prompt engineering and response parsing safeguards.

### PDF Generation in Serverless Environments

Generating PDFs on Vercel required adapting to serverless limitations and handling in-memory PDF streams instead of filesystem storage.

### Automated Email Delivery

Direct PDF attachment handling was implemented to ensure reliable report delivery across email clients.

---

## Future Improvements

* Authentication system
* Audit history dashboard
* Database persistence
* Cloud PDF storage
* Team collaboration
* CRM integrations
* AI chat assistant
* Analytics dashboard

---

## Deployment

Deployed on Vercel

```bash
npm run build
```

---

## Author

Built by Kai.

---

## License

MIT License
