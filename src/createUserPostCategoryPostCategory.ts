import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CreateUser = async () => {
    console.log("create user function perfectly working....")
    // const result = await prisma.user.create({
    //     data: {
    //         userName: "user3",
    //         email: "user3@gmail.com",

    //     }
    // })

    // const resultProfile = await prisma.profile.create({
    //     data:{
    //         userId: result.id
    //     }
    // })
    // console.log({result})
    // console.log({resultProfile})


//     const updateProfile = await prisma.profile.update({
//         where: {
//             id: 1
//         },
//         data: {
//             bio: "i am reality man"
//         }
//     })
//   console.log({updateProfile})

    //  const createCategory = await prisma.category.create({
    //     data: {
    //         name: ""
    //     }
    //  })
    
    //  console.log({createCategory})

    const createPost = await prisma.post.create({
        data: {
            title: "Ploymor phism of OOP fundamental",
            content: "this is content  of polymorephism.....",
            authorId: 1,
            postCategory: {
                create: [
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 2
                    },
                    {
                        categoryId: 3
                    }
                ]
            }
        },
        include: {
            postCategory: true
        }

    })


    console.log({createPost})
}

CreateUser();