# Database Connection Fix Report

**Date:** 2026-01-08
**Issue:** PostgreSQL authentication failure
**Status:** Resolved

## Problem

When running database commands (e.g., `pnpm run db:push`), the following error occurred:

```
error: password authentication failed for user "dev_user"
code: '28P01'
```

## Root Cause

A **port conflict** between two PostgreSQL instances:

| Process | Port | Description |
|---------|------|-------------|
| Native PostgreSQL (Windows) | 5432 | Pre-existing local installation |
| Docker container (plushify-postgres-1) | 5432 | Project database |

The Node.js application was connecting to the **native Windows PostgreSQL** instance (which had different credentials) instead of the Docker container.

## Solution

Changed the Docker container to use port **5433** to avoid the conflict.

### Files Modified

1. **docker-compose.yml**
   ```yaml
   ports:
     - "5433:5432"  # Changed from "5432:5432"
   ```

2. **.env**
   ```
   POSTGRES_URL=postgresql://dev_user:dev_password@localhost:5433/postgres_dev
   ```

### Commands Run

```bash
docker compose down
docker compose up -d
pnpm run db:push
```

## Verification

- `pnpm run db:push` - Successfully pushed schema
- `pnpm run db:studio` - Drizzle Studio accessible at https://local.drizzle.studio

## Notes

- The native PostgreSQL on Windows remains available on port 5432 if needed for other projects
- Future developers should ensure port 5433 is available, or adjust the port mapping accordingly
- The `env.example` file still references port 5432 - update if this becomes the standard configuration
