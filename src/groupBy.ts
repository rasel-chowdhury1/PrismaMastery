import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const GroupBy  = async () => {
    

    const result = await prisma.post.groupBy({
        by: ["published"],
        _count: {
            authorId: true
        }
    })

    console.log({result})
}

GroupBy()