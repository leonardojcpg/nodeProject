import { v4 as uuid } from "uuid";
import * as bcrypt from "bcryptjs";
import { users } from "../../database";

const createUsersService = async ({ name, email, password, isAdm = false }) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  const user = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    id: uuid(),
  }

  users.push(user)

  return user
};

export default createUsersService;
