import { DbCreateUser } from "../../../data/usecase/create-user";
import { CreateUserPostgreRepository } from "../../../infra/db/postgresql/repositories/create-user-repository";
import { CreateUserController } from "../../../presentation/controller/create-user";
import { makeDeleteUserValidation } from "./create-user-validation";

export const makeCreateUserController = (): CreateUserController => {
    const createUserRepository = new CreateUserPostgreRepository();
    const dbCreateUserRepository = new DbCreateUser(createUserRepository);

    return new CreateUserController(makeDeleteUserValidation(), dbCreateUserRepository);
};