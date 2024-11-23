import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  
    const result = await prisma.$transaction( async (treansClient) => {
        //query 1
        const getAllPost = await treansClient.post.findMany({
            where: {
                published: false
            }
        })

        //query 2
        const countPost = await treansClient.post.count()

        //query 3
        const updateUser = await treansClient.user.update({
            where: {
                id: 1
            },
            data: {
                age: 45
            }
        })

        return {
            getAllPost,
            countPost,
            updateUser
        }
    })

    console.log(result)
}

interactiveTransaction()