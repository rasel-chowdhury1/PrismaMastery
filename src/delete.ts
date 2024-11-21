import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletedData = async () => {

     console.log("deletedData function perfectly workding....")

     const result = await prisma.post.deleteMany({
        where: {
            published: true
        },

     })

     console.log({result})
}

deletedData()