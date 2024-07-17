/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:JRqgiPz7anU5@ep-wispy-bonus-a5w2d7w4.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };
  