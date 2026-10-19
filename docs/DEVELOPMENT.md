# Local Development Guide

## Prerequisites
- Node.js LTS and npm
- Git
- MongoDB local instance or a MongoDB connection string
- A GitHub account for version control

## Planned workspace
- `client/`: React + TypeScript + Vite frontend
- `server/`: Express REST API
- `docs/`: architecture, database and API documentation
- `postman/`: API collection and environment templates

## Environment variables
Create a local `.env` file in the server directory based on `.env.example`. Never commit real secrets.

Expected server configuration:
- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`
- `CLIENT_ORIGIN`

## Suggested implementation order
1. Scaffold client and server.
2. Add health endpoint and confirm the API starts.
3. Build shared layout, navigation and responsive public pages.
4. Add Mongoose models and validated CRUD endpoints.
5. Add authentication and admin authorization.
6. Implement match result confirmation and standings calculation.
7. Add tests and deployment configuration.

## Git workflow
Use small commits with descriptive messages. Before pushing, run tests and check `git status`. Never commit `.env`, database credentials, access tokens or build output.
