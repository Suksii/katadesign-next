require("dotenv").config({
  path: ".env.local",
});

const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const { ADMIN1_EMAIL, ADMIN1_PASSWORD } = process.env;

  const hashedPassword = await bcrypt.hash(ADMIN1_PASSWORD, 12);

  await prisma.admin.upsert({
    where: { email: ADMIN1_EMAIL },
    update: {},
    create: {
      email: ADMIN1_EMAIL,
      password: hashedPassword,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
