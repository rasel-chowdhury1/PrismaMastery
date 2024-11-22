import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const FilteringData = async () => {

    // const andFiltering = await prisma.post.findMany({
    //     where: {
    //         // all condition will be true then show this data
    //         AND: [
    //             {title:{contains: "python"}},
    //             {published: false}
    //         ]
    //     }
    // })
    // console.log({andFiltering})

    const orFiltering = await prisma.post.findMany({
        where: {
            //any condition will be true then show this data
            OR: [
                {title: {contains: "title"}},
                {published: false}
            ]
        }
    })

    console.log({orFiltering})
}

FilteringData()