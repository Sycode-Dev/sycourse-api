import { Router } from "express";
import { userRoutes } from "./select-user.routes";

export const routes = Router();

routes.use("/users", userRoutes);

