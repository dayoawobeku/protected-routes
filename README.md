## How to protect API routes with Nextjs 13 middleware

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open Postman or any other Rest API client and run the requests in the `src > app > api` directory.

For example, `src > app > api > admin > list > route.ts` will be `http://localhost:3000/api/admin/list`. And so on.

Don't forget to pass `Authorization` headers of `role` or `admin` in your request, depending on the permission that each role has.

If you don't pass an `Authorization` header, you'll get a 401 unauthorized. If you pass a wrong `role`, you'll get a 401 unauthorized.

### Hack away!
