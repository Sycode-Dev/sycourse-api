import { RequiredFieldValidation } from "../../../presentation/helpers/validators/required-field-validation/required-field-validation";
import { ValidationComposite } from "../../../presentation/helpers/validators/validation-composite";
import type { Validation } from "../../../presentation/protocols/validation";

export const makeDeleteUserValidation = () => {
  const validations: Array<Validation> = [];

  for (const field of ["firstName", "lastName", "password", "nationality", "birth"]) {
    validations.push(new RequiredFieldValidation(field));
  }

  return new ValidationComposite(validations);
};