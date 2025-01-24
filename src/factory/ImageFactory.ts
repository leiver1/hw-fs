import { prisma } from "../../prisma/prismaClient";
import { faker } from "@faker-js/faker";

async function Image(amount: number) {
  await prisma.image.deleteMany({});
  console.log("Deleting Images");

  for (let i = 0; i < amount; i++) {
    const image = await prisma.image.create({
      data: {
        alt: `image number ${i}`,
        url: faker.image.urlLoremFlickr({ width: 128, height: 128 }),
      },
    });
  }
}

export default Image;
