# Initial Database Design

This is the proposed MongoDB/Mongoose data model. Refine fields and indexes as the implementation develops.

## Collections

### User
- `name`: string, required
- `email`: string, required, unique, normalized
- `passwordHash`: string, required, never return in API responses
- `role`: `admin` or `member`
- `isActive`: boolean
- timestamps

### Sport
- `name`: string, required
- `slug`: string, unique
- `description`: string
- `isActive`: boolean
- timestamps

### Team
- `name`: string, required
- `sportId`: reference to Sport
- `captainName`: string
- `members`: array of member references or structured member records
- `isActive`: boolean
- timestamps

### Tournament
- `name`: string, required
- `sportId`: reference to Sport
- `format`: string
- `startDate`, `endDate`: dates
- `status`: planned, registration-open, ongoing, completed or cancelled
- `teamIds`: references to participating teams
- timestamps

### Match
- `tournamentId`: reference to Tournament
- `sportId`: reference to Sport
- `homeTeamId`, `awayTeamId`: references to Team
- `scheduledAt`: date
- `venue`: string
- `status`: scheduled, live, completed or cancelled
- `result`: structured sport-specific score/outcome, optional until confirmed
- `resultConfirmedAt`: date, optional
- timestamps

### Registration
- `userId`: reference to User when account-based registration is enabled
- `teamId`: optional reference to Team
- `tournamentId`: reference to Tournament
- `status`: pending, approved, rejected or withdrawn
- timestamps

### Announcement
- `title`: string, required
- `body`: string, required
- `publishedAt`: date, optional
- `isPublished`: boolean
- `createdBy`: reference to User
- timestamps

### AuditLog
- `actorId`: reference to User
- `action`: string
- `entityType`: string
- `entityId`: string
- `summary`: string
- `createdAt`: date

## Standings rules
- Standings must be derived from confirmed match results, not manually edited totals.
- Rules such as points for a win, draw handling, tie-breakers and score difference vary by sport and should be configured per sport/tournament.
- Recalculate affected standings whenever a confirmed result is added, corrected or invalidated.
- Keep an audit record of result changes.

## Indexes to consider
- User: unique index on normalized email
- Sport: unique index on slug
- Match: compound index on tournamentId and scheduledAt
- Registration: compound index on tournamentId and status
- Announcement: compound index on isPublished and publishedAt
