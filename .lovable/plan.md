DNS is configured correctly on Hostinger. No code changes needed.

## What's set up

- **A @ → 185.158.133.1** (TTL 3600) — root domain points to Lovable
- **CNAME www → bakareieva.lt** (TTL 300) — www follows root
- **TXT _lovable → "lovable_verify=..."** (TTL 3600) — ownership verification

## Action for you (outside Lovable code)

1. Confirm the old `A @ → 2.57.91.91` record is deleted (not visible in latest screenshot — likely done).
2. In Lovable: **Project Settings → Domains → Connect Domain**, enter `bakareieva.lt`.
3. Wait for verification (usually minutes) and automatic SSL provisioning.

No plan to implement — this is a DNS/hosting configuration confirmation, not a code task.
