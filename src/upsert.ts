import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// if where data not exist in database then create new data otherwise update exist data
const upsert = async () => {
    console.log("upsert perfectly working....")

    const result = await prisma.post.upsert({
        where: {
            id: 10,
        },
        update: {
            title: "update title"
        },
        create: {
            title: "title 9",
            content: "this is content 9...",
            author: "hello"
        }
    })

    console.log({result})
}

upsert()