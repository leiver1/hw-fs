import { prisma } from "../../prisma/prismaClient";
import bcrypt from "bcrypt";

async function User() {
  await prisma.user.deleteMany();
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("Itech123password.", saltRounds);

  const user = {
    firstname: "Patrick",
    lastname: "Jürs",
    password: hashedPassword,
    email: "test@example.com",
  };

  await prisma.user.create({
    data: user,
  });

  console.log("User:", user.firstname + " " + user.lastname + " was created");
}

export default User;
