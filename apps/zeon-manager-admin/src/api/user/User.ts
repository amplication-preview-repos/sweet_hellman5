import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  department: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  position: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
