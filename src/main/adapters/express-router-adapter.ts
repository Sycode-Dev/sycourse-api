import type { Request, Response } from "express";
import type { Controller } from "../../presentation/protocols/controller";
import type { HttpRequest } from "../../presentation/protocols/http";

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: {
        ...req.body,
      },
      header: req.headers,
      params: req.params,
    };

    const httpResponse = await controller.handle(httpRequest);

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
