import type { CreateUser, CreateUserInput } from "../../domain/usecase/create-user";
import { badRequest, ok, serverError } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";
import type { Validation } from "../protocols/validation";

export class CreateUserController implements Controller {
    public constructor(private readonly validator: Validation, private readonly createUser: CreateUser) {}
    
    public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body);
            if (error) return badRequest(error);
            
            const fields = ["firstName", "lastName", "email", "password", "nacionality", "birth"];
            const data = {};
            for (const field of fields) {
                data[field] = httpRequest.body[field];
            }

            const user = await this.createUser.create(data as CreateUserInput);
            
            return ok(user);
        } catch (err) {
            console.log(err);
            return serverError();
        }

    }
}