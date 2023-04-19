
import type { Request, Response } from "express";
import { prismaClient } from "../../main/config/database";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserController = {
  async findProfile(req: Request, res: Response) {
    const user = await prismaClient.users.findMany({
      where: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        first_name: "Lucas",
      },
    });

    return res.json(user);
  },
};
