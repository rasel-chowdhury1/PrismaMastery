import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {
    //create a data in database
    // const result = await prisma.post.create({
    //     data:{
    //         title: "this is title2",
    //         content: "this is content2.....",
    //         author: "test2"
    //     }
    // })
    // console.log(result)

    //create multiple data in database
    const result = await prisma.post.createMany({
        data: [
            {
                title: "title 3",
                content: "this is constent 3 .....",
                author: "user3"
            },
            {
                title: "title 4",
                content: "this is constent 4 .....",
                author: "user3"
            },
            {
                title: "title 5",
                content: "this is constent 5 .....",
                author: "user3"
            },
        ]
    })

    console.log({result})
    

    
}


main()