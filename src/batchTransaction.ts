import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const batchTransaction = async () => {

    const createUser = prisma.user.create({
        data: {
            userName: "hello3",
            email: "hello3@gmail.com",
            age: 20
        }
    })

    const updateProfile = prisma.user.update({
        where: {
            id: 5
        },
        data: {
            age: 35
        }
    })

    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateProfile
    ])

    console.log({userData,updateData})

}

batchTransaction()