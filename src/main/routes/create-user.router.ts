import type { Express } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeCreateUserController } from "../factories/create-user/create-user";

export default (app: Express) => {
    app.post("/create-user", adaptRoute(makeCreateUserController()));
};