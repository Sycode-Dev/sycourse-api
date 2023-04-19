import { Router } from "express";
import { UserController } from "../../presentation/controllers/UserController";

export const userRoutes = Router();

userRoutes.get("/profile", UserController.findProfile);
