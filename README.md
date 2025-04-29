## Getting Started

First, run the development server:

```bash
pnpm dev

```

## Whenever facing issue while connecting to db

1.

```bash
psql <DATABASE_URL>
```

- if entered inside db that correct url

2.

```bash
npx prisma db pull
```

note - if local db is not sync with remote then above commnad

```bash
npx prisma migrate dev
```

```bash
npx prisma generate
```

3. Restart the project
