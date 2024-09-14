# piggy-bank

Elaborate description

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;&nbsp;&nbsp;![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;&nbsp;&nbsp;![Express.js](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;&nbsp;&nbsp;![Drizzle](https://img.shields.io/badge/drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)&nbsp;&nbsp;&nbsp;![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)&nbsp;&nbsp;&nbsp;![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;&nbsp;&nbsp;

# Installation steps:

Inside the backend folder:

1. Use `npm install` to install dependencies.
2. Change TURSO_CONNECTION_URL and TURSO_AUTH_TOKEN variables on .env to your database url variables.
3. Use `npx drizzle-kit generate` to generate the table.
   based on the database schema (schema.ts).
4. Use `npx drizzle-kit migrate` to generate the table migrations.
5. Run the app with `npm run dev`.
