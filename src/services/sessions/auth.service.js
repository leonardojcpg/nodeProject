import jwt from 'jsonwebtoken'
import * as bcrypt from "bcryptjs";
import { users } from "../../database";

const authService = async ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ banana: true }, "8422dbd9f4d4bbc30b6b4d57605da553", {
    expiresIn: "24h",
    subject: user.id,
  });

  return {token}
};


export default authService