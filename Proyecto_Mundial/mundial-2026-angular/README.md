# Mundial 2026 HUB — Angular

Migración del proyecto Figma/React a **Angular 17 + TailwindCSS**.

---

## 🚀 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm start
# → http://localhost:4200
```

---

## 📁 Estructura del proyecto

```
src/
└── app/
    ├── models/
    │   └── index.ts                  # Interfaces TypeScript (Team, Match, User, etc.)
    │
    ├── services/
    │   └── mock-data.service.ts      # Datos de prueba (equivale a mockData.ts de React)
    │
    ├── components/
    │   └── shared/
    │       ├── badge/
    │       │   └── badge.component.ts      # <app-badge variant="success">
    │       ├── button/
    │       │   └── button.component.ts     # <app-button variant="primary">
    │       ├── card/
    │       │   └── card.component.ts       # <app-card [hover]="true">
    │       ├── input/
    │       │   └── input.component.ts      # <app-input label="Email" [formControl]="...">
    │       └── layout/
    │           └── layout.component.ts     # Sidebar + Header (wrappea las páginas con routing)
    │
    ├── pages/
    │   ├── dashboard/
    │   │   └── dashboard.component.ts      # ✅ MIGRADO
    │   ├── login/                          # ⏳ Pendiente
    │   ├── register/                       # ⏳ Pendiente
    │   ├── agenda/                         # ⏳ Pendiente
    │   ├── matches/                        # ⏳ Pendiente
    │   ├── pools/                          # ⏳ Pendiente
    │   ├── album/                          # ⏳ Pendiente
    │   ├── tickets/                        # ⏳ Pendiente
    │   ├── notifications/                  # ⏳ Pendiente
    │   ├── support/                        # ⏳ Pendiente
    │   ├── settings/                       # ⏳ Pendiente
    │   └── admin/                          # ⏳ Pendiente
    │
    ├── app.routes.ts         # Rutas de la aplicación (lazy loading)
    ├── app.config.ts         # Bootstrap de la app (provideRouter, etc.)
    └── app.component.ts      # Root component (<router-outlet>)
```

---

## 🎨 Paleta de colores

| Color     | Hex       | Uso                         |
|-----------|-----------|-----------------------------|
| Verde     | `#00B140` | Primario — acciones, links  |
| Azul      | `#003087` | Secundario — hover, badges  |
| Azul medio| `#00509E` | Acento — gradientes         |

---

## ✅ Equivalencias React → Angular

| React                    | Angular                                |
|--------------------------|----------------------------------------|
| `function Component()`   | `@Component({ standalone: true })`     |
| `useState()`             | `signal()` o propiedad de clase        |
| `Link to="/path"`        | `[routerLink]="'/path'"`               |
| `useNavigate()`          | `Router.navigate()`                    |
| `className="..."`        | `class="..."` en template              |
| `{condition && <el/>}`   | `*ngIf="condition"`                    |
| `{list.map(...)}`        | `*ngFor="let item of list"`            |
| Props                    | `@Input()`                             |
| Callback props           | `@Output()` + `EventEmitter`           |
| Context / prop drilling  | `Injectable` service                   |

---

## 📋 Páginas por migrar

Ejecuta este proyecto y avísame qué página quieres migrar a continuación.
Cada página se genera lista para conectar con el backend real cuando estés listo.
