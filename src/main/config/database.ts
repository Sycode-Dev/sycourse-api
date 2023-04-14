import { Client } from "pg";

const client = new Client({
    user: "dbuser",
    host: "database.server.com",
    database: "mydb",
    password: "secretpassword",
    port: 3211,
  });
  