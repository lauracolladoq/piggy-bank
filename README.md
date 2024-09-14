# piggy-bank

Elaborate description

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;&nbsp;&nbsp;![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;&nbsp;&nbsp;![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)&nbsp;&nbsp;&nbsp;![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)&nbsp;&nbsp;&nbsp;

# Installation steps:

Inside the backend folder:

1. Use `npm install` to install dependencies.
2. Change TURSO_CONNECTION_URL and TURSO_AUTH_TOKEN variables on .env to your database url variables.
3. Use `npx drizzle-kit generate` to generate the table.
   based on the database schema (schema.ts).
4. Use `npx drizzle-kit migrate` to generate the table migrations.
5. Run the app with `npm run dev`.
