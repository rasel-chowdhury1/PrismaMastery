import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
    console.log("pagination sorting ....")

    //offset pagination 
    const offsetData = await prisma.post.findMany({
        skip: 2,
        take: 5
    })
    // console.log({offsetData})
    

    //crusor pagination
    const cursorBasedData = await prisma.post.findMany({
        skip: 2,
        take:5,
        cursor: {
            id: 3
        }
    })
    // console.log({cursorBasedData})
    
    //sorting data
    const sortingData = await prisma.post.findMany({
        orderBy: {
            id: 'desc'
        },
        skip: 2,
        take: 3,
        where: {
            author: "user3"
        }
    })

    console.log({sortingData})
}

paginationSorting()