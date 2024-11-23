import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const aggregates = async () => {
    // count average age from user records
//     const averageAge = await prisma.user.aggregate({
//         _avg: {
//             age: true
//         }
//     })
//     console.log("average result => ", averageAge)

    // count total sum age of user records
    //   const totalSum = await prisma.user.aggregate({
    //     _sum: {
    //         age: true
    //     }
    //   })
    //   console.log("total sum of age -> ", totalSum)

    // find max age of user record
    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    })
    console.log("max age -> ", maxAge)

    // find min age of user record
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })
    console.log("max age -> ", minAge)

    // count of user record
    const countRecords = await prisma.user.count()
    // console.log("max age -> ", countRecords)

    // count records by aggregate
    const countRecordsByAggregate = await prisma.user.aggregate({
        _count: {
            age: true
        }
    })

    console.log("count recores by aggregate -> ", countRecordsByAggregate)

}

aggregates()