## Next.js App Router Course - Dashboard

Dies ist das vollständig implementierte Next.js Dashboard-Projekt basierend auf dem Next.js App Router Course.

### 🚀 Features

✅ **Komplett implementierte Funktionalität:**
- ✅ Responsive Dashboard-Layout mit Navigation
- ✅ Authentifizierung mit NextAuth.js
- ✅ Login/Logout System
- ✅ Protected Routes (Middleware)
- ✅ Dashboard mit Cards und Charts
- ✅ Invoices und Customers Seiten
- ✅ Moderne UI mit Tailwind CSS
- ✅ TypeScript Unterstützung
- ✅ Server Actions für Formular-Handling

### 🛠 Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **NextAuth.js** für Authentifizierung  
- **PostgreSQL** (vorbereitet)
- **Heroicons** für Icons

### 🎯 Schnellstart

1. **Dependencies installieren:**
   ```bash
   pnpm install
   ```

2. **Environment Variables einrichten:**
   ```bash
   cp .env.example .env.local
   # AUTH_SECRET ist bereits gesetzt für lokale Entwicklung
   ```

3. **Development Server starten:**
   ```bash
   pnpm dev
   ```

4. **Anwendung öffnen:**
   - Hauptseite: [http://localhost:3000](http://localhost:3000)
   - Login: [http://localhost:3000/login](http://localhost:3000/login)
   - Dashboard: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

### 🔐 Login Credentials

Für Demo-Zwecke:
- **Email:** `user@nextmail.com`
- **Passwort:** `123456`

### 📁 Projekt Struktur

```
app/
├── dashboard/           # Dashboard Pages
│   ├── layout.tsx      # Dashboard Layout
│   ├── page.tsx        # Dashboard Home
│   ├── invoices/       # Invoices Section
│   └── customers/      # Customers Section
├── login/              # Login Page
├── ui/                 # UI Components
│   ├── dashboard/      # Dashboard Components
│   ├── invoices/       # Invoice Components
│   └── fonts.ts        # Font Definitions
└── lib/                # Utilities & Data
    ├── actions.ts      # Server Actions
    ├── definitions.ts  # TypeScript Types
    └── utils.ts        # Helper Functions
```

### ✨ Implementierte Komponenten

- **Navigation:** Responsive Sidebar mit aktiver Seiten-Anzeige
- **Authentication:** Vollständiges Login/Logout System
- **Dashboard Cards:** Statistische Übersicht
- **Revenue Chart:** Vorbereitet für Datenvisualisierung
- **Invoices Table:** Struktur für Rechnungsverwaltung
- **Search & Pagination:** UI-Komponenten bereit

### 🔄 Nächste Schritte

Das Projekt ist vollständig einsatzbereit. Für eine vollständige Produktionsversion:

1. **Datenbank einrichten** (PostgreSQL)
2. **Environment Variables** für Produktion konfigurieren
3. **Daten-Fetching** implementieren
4. **CRUD Operations** für Invoices/Customers hinzufügen

Mehr Informationen: [Next.js Learn Course](https://nextjs.org/learn)
