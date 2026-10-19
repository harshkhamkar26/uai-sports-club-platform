# UAI Sports Club Platform

A responsive sports-management and tournament-intelligence platform for UAI Sports Club.

## Current scaffold
- React + TypeScript + Vite frontend
- Express API starter with a health endpoint
- Initial architecture, database and REST API documentation
- Responsive dashboard UI with sample fixture cards
- npm workspaces for the client and server

> **Important:** The dashboard currently displays sample UI data. Authentication, MongoDB-backed CRUD, live results, standings calculations and production deployment are planned next and are not yet implemented.

## Project structure
```text
client/                 React + TypeScript frontend
  src/App.tsx           Routes and dashboard starter
  src/styles.css        Responsive dark sports-tech design
server/                 Express API
  src/index.js           Health endpoint and API bootstrap
  .env.example           Environment-variable template
docs/
  ARCHITECTURE.md        System architecture and security principles
  DATABASE.md            Proposed MongoDB data model
  API.md                 Planned REST API contract
  DEVELOPMENT.md         Local setup and implementation order
```

## Requirements
- Node.js LTS with npm
- MongoDB for the database-backed stages

## Run locally
From the repository root, install dependencies:

```bash
npm install
```

Start the frontend in one terminal:

```bash
npm run dev:client
```

Start the API in a second terminal:

```bash
npm run dev:server
```

The frontend runs on Vite's local development URL (normally `http://localhost:5173`). The API health check is available at `http://localhost:4000/api/v1/health`.

Copy `server/.env.example` to `server/.env` before configuring local database access. Replace the placeholder JWT secret with a long random local value before authentication work begins. Never commit real secrets.

## Roadmap
1. Complete the responsive public sports and tournament experience.
2. Add Mongoose models and validated REST endpoints.
3. Implement login, password hashing and role-based authorization.
4. Build admin workflows for sports, teams, tournaments, fixtures and results.
5. Calculate standings from confirmed results and audit corrections.
6. Add automated tests, accessibility checks and deployment documentation.

## Security
- Do not commit `.env` files or credentials.
- Store password hashes, never plaintext passwords.
- Enforce permissions in the API.
- Validate all write requests on the server.

## Academic alignment
The implementation roadmap supports practical work in responsive web design, ES6+, Fetch API, TypeScript, React, routing, Express REST APIs, MongoDB/Mongoose, JWT authentication and deployment.
