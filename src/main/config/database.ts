import { Client } from "pg";
import { env } from "./env";

export const client = new Client({
    connectionString: env.databaseUrl,
    port: 5432,
});
