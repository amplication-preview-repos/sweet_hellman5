import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  position?: string | null;
  roles: InputJsonValue;
  username: string;
};
