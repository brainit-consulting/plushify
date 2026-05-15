# Secret Rotation Plan -- plushtoyai

> **Triggered by:** April 2026 Vercel platform incident. Vercel flagged stored
> environment variables with a "Needs Attention" badge in the dashboard,
> recommending rotation of any credentials whose values may have been exposed
> through their systems during the affected window.
>
> **Source code privacy is irrelevant here** -- the leak vector is platform-side,
> not repo-side. Rotation closes that exposure.

## How to use this document

1. Read **Recommended order** below -- this is the sequence to rotate in.
2. For each secret, follow the **Procedure** section that matches its type.
3. After every rotation, verify the relevant flow works end-to-end before moving on.
4. Mark this file done (or delete) once all flagged secrets are rotated.

If a secret listed here is **not** flagged "Needs Attention" in your Vercel dashboard,
you can defer it -- but plan to rotate within a reasonable window anyway. The badge
is advisory; eventually rotate everything sensitive on a calendar schedule (~quarterly).

---

## Inventory (21 sensitive, 5 non-secret)

### Sensitive (rotation candidates)

| Secret | Tier | Issuer | Procedure |
|---|---|---|---|
| `BETTER_AUTH_SECRET` | Critical | self-issued (random 32+ char) | [-> BetterAuth session signer](#better-auth) |
| `BLOB_READ_WRITE_TOKEN` | Critical | Vercel Dashboard | [-> Vercel Blob read/write token](#blob-token) |
| `DATABASE_URL` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `DATABASE_URL_UNPOOLED` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `GOOGLE_CLIENT_SECRET` | Critical | Google Cloud Console | [-> Google OAuth client secret](#google-oauth) |
| `PGDATABASE` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `PGHOST` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `PGHOST_UNPOOLED` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `PGPASSWORD` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `PGUSER` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `POLAR_ACCESS_TOKEN` | Critical | Polar.sh | [-> Polar.sh access token](#polar-token) |
| `POLAR_WEBHOOK_SECRET` | Critical | Polar.sh | [-> Polar.sh webhook signing secret](#polar-webhook) |
| `POSTGRES_DATABASE` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `POSTGRES_HOST` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `POSTGRES_PASSWORD` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `POSTGRES_PRISMA_URL` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `POSTGRES_URL` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `POSTGRES_URL_NON_POOLING` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `POSTGRES_URL_NO_SSL` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `POSTGRES_USER` | Critical | Neon Console | [-> Neon Postgres connection string](#database-url) |
| `OPENROUTER_API_KEY` | High | OpenRouter | [-> OpenRouter API key (billed)](#openrouter) |

### Non-secret / config (informational, safe to ignore)

<details><summary>5 items</summary>

- `GOOGLE_CLIENT_ID`
- `NEON_PROJECT_ID`
- `NEXT_PUBLIC_APP_URL`
- `OPENAI_EMBEDDING_MODEL`
- `OPENROUTER_MODEL`

</details>

---

## Recommended order

Do **lowest blast-radius first** so you build muscle memory on something cheap before the disruptive ones.

1. `OPENROUTER_API_KEY` -- OpenRouter API key (billed)
2. `BLOB_READ_WRITE_TOKEN` -- Vercel Blob read/write token
3. `DATABASE_URL` -- Neon Postgres connection string
4. `DATABASE_URL_UNPOOLED` -- Neon Postgres connection string
5. `GOOGLE_CLIENT_SECRET` -- Google OAuth client secret
6. `PGDATABASE` -- Neon Postgres connection string
7. `PGHOST` -- Neon Postgres connection string
8. `PGHOST_UNPOOLED` -- Neon Postgres connection string
9. `PGPASSWORD` -- Neon Postgres connection string
10. `PGUSER` -- Neon Postgres connection string
11. `POLAR_ACCESS_TOKEN` -- Polar.sh access token
12. `POLAR_WEBHOOK_SECRET` -- Polar.sh webhook signing secret
13. `POSTGRES_DATABASE` -- Neon Postgres connection string
14. `POSTGRES_HOST` -- Neon Postgres connection string
15. `POSTGRES_PASSWORD` -- Neon Postgres connection string
16. `POSTGRES_PRISMA_URL` -- Neon Postgres connection string
17. `POSTGRES_URL` -- Neon Postgres connection string
18. `POSTGRES_URL_NON_POOLING` -- Neon Postgres connection string
19. `POSTGRES_URL_NO_SSL` -- Neon Postgres connection string
20. `POSTGRES_USER` -- Neon Postgres connection string
21. `BETTER_AUTH_SECRET` -- BetterAuth session signer

> **Stripe note:** roll `STRIPE_WEBHOOK_SECRET` and `STRIPE_SECRET_KEY` close together -- Stripe's "old key still works for 12h" grace is convenient, but the webhook secret has no grace, so accept brief webhook 4xx noise during the swap.
>
> **Database note:** rotate every Postgres-related env var in one batch (DATABASE_URL + DATABASE_URL_UNPOOLED + PG* + POSTGRES_*). Mid-rotation skew breaks half your serverless instances.

---

## Pre-rotation checklist

- [ ] Confirm you have admin access to every issuer (Stripe, Resend, OpenRouter, Neon, etc.).
- [ ] **Check billing dashboards now** for the AI providers (OpenRouter / OpenAI / Anthropic / Google AI). Unusual spend = key was already in use by an attacker. Rotate those first if so.
- [ ] Pick a low-traffic window (relevant only if you have real users; if not, anytime).
- [ ] Have a working `vercel` CLI session (`vercel whoami`).
- [ ] Confirm the local repo at `H:/plushify` is on `main` and clean -- you'll redeploy after each rotation.
- [ ] Note your current production deployment ID -- you can roll back to it if needed.

---

## Procedures

### <a id="better-auth"></a>BetterAuth session signer

_Tier: Critical - Issuer: self-issued (random 32+ char)_

1. Generate: `openssl rand -base64 48` (or any cryptographic RNG).
2. Update BETTER_AUTH_SECRET in Vercel for each env.
3. Redeploy.
**WARNING**: rotating this invalidates EVERY active session - every signed-in user is bounced to /login. Time it for low traffic (or accept the cost while you have ~zero users).

### <a id="blob-token"></a>Vercel Blob read/write token

_Tier: Critical - Issuer: Vercel Dashboard_

1. Vercel -> Storage -> your Blob store -> Tokens -> revoke + recreate.
2. Update BLOB_READ_WRITE_TOKEN in Vercel env for each env.
3. Redeploy. Verify an upload + read succeed.

### <a id="database-url"></a>Neon Postgres connection string

_Tier: Critical - Issuer: Neon Console_

1. Neon Console -> your project -> Branches -> main -> Roles -> reset password for the role used in DATABASE_URL.
2. Copy new connection strings (pooled + unpooled).
3. Update DATABASE_URL, DATABASE_URL_UNPOOLED, and any PG* / POSTGRES_* / DATABASE_POSTGRES_* derivatives that share the password. All must change atomically - otherwise some functions will use the old password and fail.
4. Redeploy. Verify a query succeeds (any /api route that hits the DB).

### <a id="google-oauth"></a>Google OAuth client secret

_Tier: Critical - Issuer: Google Cloud Console_

1. Google Cloud Console -> APIs & Services -> Credentials -> your OAuth 2.0 Client ID -> Reset secret.
2. Update GOOGLE_CLIENT_SECRET in Vercel.
3. Redeploy. Sign in with Google end-to-end to verify.

### <a id="polar-token"></a>Polar.sh access token

_Tier: Critical - Issuer: Polar.sh_

1. Polar Dashboard -> Settings -> API Keys -> revoke + recreate.
2. Update POLAR_ACCESS_TOKEN in Vercel.
3. Redeploy. Verify a checkout/subscription action.

### <a id="polar-webhook"></a>Polar.sh webhook signing secret

_Tier: Critical - Issuer: Polar.sh_

1. Polar Dashboard -> Webhooks -> roll the signing secret.
2. Update POLAR_WEBHOOK_SECRET in Vercel.
3. Redeploy. Trigger a test event.

### <a id="openrouter"></a>OpenRouter API key (billed)

_Tier: High - Issuer: OpenRouter_

1. https://openrouter.ai/keys -> revoke old key, create new.
2. Update OPENROUTER_API_KEY in Vercel.
3. Redeploy. Test any AI feature end-to-end. **Check usage dashboard for unexpected spend before rotating** - if leaked, attackers may already have started draining.

---

## Post-rotation verification

After rotating each secret, run the matching smoke test:

| Secret type | Smoke test |
|---|---|
| Stripe secret/webhook | Trigger a test checkout; verify webhook arrives + signature validates |
| BetterAuth | Sign in fresh; confirm session persists on reload |
| Database | Hit any /api route that reads or writes; verify 200 |
| Blob token | Upload a small file via your app, then read it back |
| AI provider key | Trigger any AI feature; confirm response + check provider's usage dashboard ticks up |
| Resend | Trigger a password-reset or notification email; confirm receipt |
| Cron secret | Wait for the next cron to run; confirm 200 in Vercel logs |
| OAuth (Google) | Sign in via Google end-to-end |

---

## Rollback notes

If a rotation breaks production:

1. **Restore the old value immediately** -- Vercel keeps env-var history; the value is still in the issuer's dashboard if you didn't actively revoke it. Ideally, you keep both old and new active for the swap window.
2. **Redeploy** the previous deployment from `vercel ls` if a code change snuck in alongside the env update.
3. **For BetterAuth and signing secrets**: there's no rollback for users -- they're logged out. The only fix forward is "ride it out, users re-login."
4. **For encryption keys**: never rotate without a re-encryption migration. If you accidentally did, restore from backup.

---

## Track progress

When done, mark the date here and either delete this file or move it to an archive folder.

- [ ] All flagged secrets rotated on: `_____-__-__`
- [ ] All smoke tests passed
- [ ] Removed/archived this plan
