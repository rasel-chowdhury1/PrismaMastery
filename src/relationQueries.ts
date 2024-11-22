import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const RelationQuery = async() => {
    console.log("query function perfectly working....")


    // fluent api
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     }
    // }).profile()

    
    //relational filters
    const pulishedPostUsers = await prisma.user.findMany({
        include: {
            post: {
                where: {
                    published: false
                }
            }

        }
        
    })

    console.dir(pulishedPostUsers, {depth: Infinity})
}

RelationQuery()