import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {
    console.log("main funciton is running....")
    const result = await prisma.post.create({
        data:{
            title: "this is title2",
            content: "this is content2.....",
            author: "test2"
        }
    })

    console.log(result)
    

    const getAllResult = await prisma.post.findMany();

    console.log(getAllResult)
}


main()