import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {
    //find all data from post model
    // const getAllResult = await prisma.post.findMany();
    // console.log(getAllResult)

    //find first or throw error 
    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            published: false
        }
    })
    console.log({findFirst})

    // find uniqure or throw error but always find unique filed only
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 3
        },
        // if we want show specific field value then using select 
        select: {
            title: true,
        }
    })

    console.log({findUnique})
}


main()