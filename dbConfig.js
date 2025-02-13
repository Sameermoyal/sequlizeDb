export const dbConfig ={
    HOST:'localhost',
    USER:'root',
     PASSWORD:"sameer",
    DB:'sequlizedb',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:1000
    }
}