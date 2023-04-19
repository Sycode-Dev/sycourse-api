import app from "./config/app";
import { env } from "./config/env";

const bootstrap = async () => {
  app.listen(env.port, async () => {
    console.log(`The server has started as 'http://localhost:${env.port}'`);
  });
};

bootstrap();
