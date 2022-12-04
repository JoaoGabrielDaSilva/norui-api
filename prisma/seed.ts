import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.deleteMany();
  //   const alice = await prisma.user.create({
  //     data: {
  //         name: 'Alice',
  //       email: 'alisce@prisma.io',
  //     },
  //   });
  //   console.log({ alice });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
