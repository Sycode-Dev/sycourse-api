/* eslint-disable @typescript-eslint/no-magic-numbers */
import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
};
