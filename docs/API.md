# REST API Contract (Planned)

Base path: `/api/v1`

Responses should use JSON and consistent error shapes. All write operations must validate input server-side.

## Public endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Service health |
| GET | `/sports` | List active sports |
| GET | `/teams` | List teams, with optional sport filter |
| GET | `/tournaments` | List tournaments |
| GET | `/matches` | List fixtures/results with filters |
| GET | `/standings/:tournamentId` | Calculate standings from confirmed results |
| GET | `/announcements` | List published announcements |

## Authentication
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/register` | Register an eligible account, if public registration is enabled |
| POST | `/auth/login` | Verify credentials and issue a token |
| GET | `/auth/me` | Return the current authenticated user |

## Admin endpoints
All admin endpoints require authentication and the admin role.

| Method | Endpoint | Purpose |
|---|---|---|
| POST/PATCH/DELETE | `/sports` | Manage sports |
| POST/PATCH/DELETE | `/teams` | Manage teams |
| POST/PATCH/DELETE | `/tournaments` | Manage tournaments |
| POST/PATCH/DELETE | `/matches` | Manage fixtures and match details |
| POST/PATCH | `/matches/:id/result` | Record or correct a result |
| POST/PATCH/DELETE | `/announcements` | Manage announcements |
| GET | `/registrations` | Review registrations |
| PATCH | `/registrations/:id` | Approve or reject a registration |
| GET | `/audit-logs` | Review administrative changes |

## Error response
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed"
  }
}
```

Use suitable HTTP status codes: 200/201 for successful reads and writes, 400 for invalid input, 401 for missing/invalid authentication, 403 for insufficient permissions, 404 for missing resources, and 500 for unexpected server failures.

These routes are a design contract, not a claim that the endpoints are implemented yet.
