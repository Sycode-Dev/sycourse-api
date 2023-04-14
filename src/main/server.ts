import { env } from "./config/env";
import app from "./config/app";

const bootstrap = async () => {
  app.listen(env.port, () => {
    console.log(`The server has started as 'http://localhost:${env.port}'`);
  });
};

bootstrap();
