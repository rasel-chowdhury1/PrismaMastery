import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

const update = async () => {
    console.log("update file working...")
    //single update data in database
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id: 8
    //     },
    //     data: {
    //         title: "this title 8",
    //         content: "this is content 8...."
    //     }
    // })
    // console.log({singleUpdate})

    //update multiple data in database
    const updatatMany = await prisma.post.updateMany({
        where: {
            author: "user4"
        },
        data: {
            published: true
        }
    })

    console.log(updatatMany)



    
}

update()