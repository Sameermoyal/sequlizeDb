import { Sequelize } from "sequelize";
import { dbConfig } from "./dbConfig.js";


const sequelize=new Sequelize(
   dbConfig.DB,
   dbConfig.USER,
   dbConfig.PASSWORD,
   {
    host:dbConfig.HOST,
     dialect:dbConfig.dialect,
     pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
     }
   }
)

sequelize.authenticate()
.then(()=>console.log('Connection has been established'))
.catch(err=>console.error('error detect to Connect sequelize',err))

sequelize.sync({force:false}).then(()=>console.log("sync : sync done"))

export default sequelize

// import { Sequelize } from "sequelize";
// import { dbConfig } from "./dbConfig.js";

// const sequelize =new Sequelize(
    
//         dbConfig.DB,
//         dbConfig.USER,
//         dbConfig.PASSWORD,
//         {
//             host:dbConfig.HOST,
//             dialect:dbConfig.dialect,
//             pool:{
//                 max:dbConfig.pool.max,
//                 min:dbConfig.pool.min,
//                 acquire:dbConfig.pool.acquire,
//                 idle:dbConfig.pool.idle,
//             }
//         },
       
    
// )


// sequelize.authenticate()
// .then(()=>console.log('Connection has been established'))
// .catch(err=>{
//     console.error('Unable to connet to the database',err)
// })

// await sequelize.sync({force:false});

// console.log('yes, sync done');

// export default sequelize;