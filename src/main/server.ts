import { env } from "./config/env";
import app from "./config/app";
import { client } from "./config/database";

const bootstrap = async () => {
  app.listen(env.port, async () => {
    await client.connect();
    console.log("Connection succefull with database");

    console.log(`The server has started as 'http://localhost:${env.port}'`);
  });
};

bootstrap();
