# 🏆 Mundial 2026 — Plataforma Interactiva

Plataforma académica full-stack para seguir el Mundial 2026 FIFA.

---

## 📂 Estructura del Proyecto

```
Proyecto_Mundial/
├── backend/                ← API REST (Node.js + Express + MySQL)
│   ├── database/           ← Script SQL de creación e inicialización
│   ├── src/
│   │   ├── config/         ← env, db pool, logger
│   │   ├── middlewares/    ← auth JWT, roles, errores, logs, validación
│   │   ├── modules/        ← 10 módulos (auth, usuarios, partidos, agenda, notificaciones, entradas, pollas, album, soporte, admin)
│   │   ├── adapters/       ← sports-api.adapter.js
│   │   ├── jobs/           ← sync-partidos.job.js (cron)
│   │   └── app.js
│   ├── tests/
│   ├── swagger.yaml
│   └── package.json
│
├── mundial-2026-angular/   ← Frontend (Angular 17 + Tailwind CSS)
│   └── src/app/
│       ├── components/     ← shared: layout, badge, card
│       ├── guards/         ← auth.guard.ts
│       ├── interceptors/   ← jwt.interceptor.ts
│       ├── models/         ← interfaces TypeScript
│       ├── pages/          ← dashboard, login, register, matches, pools, album, tickets, notifications, support, settings, admin, agenda
│       └── services/       ← auth, partidos, agenda, notificaciones, entradas, pollas, album, soporte
│
└── documentación/
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- **Node.js** ≥ 18
- **MySQL** ≥ 8
- **Angular CLI** ≥ 17 (`npm install -g @angular/cli`)

### 1. Base de Datos

```bash
# Conectarse a MySQL
mysql -u root -p

# Ejecutar el script de creación
SOURCE backend/database/mundial2026.sql;
```

> Esto crea la base de datos `mundial2026` con todas las tablas, índices y datos semilla.

### 2. Backend

```bash
cd backend

# Instalar dependencias
npm install

# Copiar .env
cp .env.example .env

# Editar .env con tus credenciales de MySQL
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=tu_password
# JWT_SECRET=algo_seguro_aqui

# Iniciar en modo desarrollo
npm run dev
```

El servidor estará en `http://localhost:3000`.
La documentación Swagger estará en `http://localhost:3000/api-docs`.

### 3. Frontend

```bash
cd mundial-2026-angular

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
ng serve
```

El frontend estará en `http://localhost:4200`.

---

## 🔑 Credenciales por Defecto

| Rol | Email | Contraseña |
|------|-------|------------|
| Admin | admin@mundial2026.com | password (bcrypt hash incluido en seed, ajustar según necesidad) |

---

## 🛠️ Tecnologías

| Capa | Tecnologías |
|------|------------|
| **Frontend** | Angular 17, Tailwind CSS, Signals, Standalone Components |
| **Backend** | Node.js, Express 4, MySQL 8, JWT, bcrypt, express-validator |
| **Base de datos** | MySQL 8 (InnoDB, UTF-8, transacciones) |
| **Logging** | Winston + rotación diaria, tabla LOG en BD |
| **Documentación** | Swagger / OpenAPI 3.0 |
| **Testing** | Jest + Supertest |
| **Cron** | node-cron (sincronización cada 30s) |

---

## 📡 Endpoints de la API

| Método | Ruta | Descripción | Autenticación |
|--------|------|-------------|---------------|
| POST | `/api/auth/register` | Registro de usuario | ❌ |
| POST | `/api/auth/login` | Inicio de sesión | ❌ |
| GET | `/api/partidos` | Listar partidos | ✅ |
| GET | `/api/partidos/:id` | Detalle de partido | ✅ |
| GET | `/api/agenda` | Mi agenda | ✅ |
| POST | `/api/agenda` | Agregar a agenda | ✅ |
| GET | `/api/notificaciones` | Mis notificaciones | ✅ |
| PATCH | `/api/notificaciones/:id/leer` | Marcar como leída | ✅ |
| GET | `/api/entradas` | Mis entradas | ✅ |
| POST | `/api/entradas/:id/reservar` | Reservar entrada | ✅ |
| POST | `/api/entradas/:id/transferir` | Transferir entrada | ✅ |
| GET | `/api/pollas` | Listar pollas | ✅ |
| POST | `/api/pollas` | Crear polla | ✅ |
| POST | `/api/pollas/unirse` | Unirse a polla | ✅ |
| GET | `/api/pollas/:id/ranking` | Ranking de polla | ✅ |
| POST | `/api/pollas/:id/pronosticos` | Guardar pronósticos | ✅ |
| GET | `/api/album` | Mi álbum | ✅ |
| POST | `/api/album/paquetes/:id/abrir` | Abrir paquete | ✅ |
| GET | `/api/soporte` | Mis casos | ✅ |
| POST | `/api/soporte` | Crear caso | ✅ |
| GET | `/api/admin/usuarios` | Listar usuarios | ✅ (admin) |
| POST | `/api/admin/partidos` | Crear partido | ✅ (admin) |
| POST | `/api/admin/pollas/:id/calcular-puntos` | Calcular puntos | ✅ (admin) |

---

## 🔒 Seguridad

- **Hash**: bcrypt con 10 rounds
- **JWT**: Token con expiración de 8h
- **Bloqueo**: Cuenta bloqueada tras 5 intentos fallidos (15 min)
- **Roles**: aficionado, admin, operador (guard middleware)
- **Validación**: express-validator en todas las rutas
- **CORS**: Restringido al origen del frontend

---

## 📊 Reglas de Negocio Clave

1. **Entradas**: Reservas con transacciones MySQL (`SELECT ... FOR UPDATE`) para evitar double-booking
2. **Pollas**: Pronósticos bloqueados automáticamente al iniciar el partido
3. **Puntuación**: 3 pts marcador exacto, 1 pt ganador correcto
4. **Álbum**: Distribución de rareza — 70% común, 25% rara, 5% legendaria
5. **Sincronización**: Cron cada 30s actualiza partidos en curso desde API deportiva
6. **Fallback**: Si la API externa falla, se mantiene el último dato cacheado

---

## 📝 Licencia

Proyecto académico — Universidad. Solo para fines educativos.
