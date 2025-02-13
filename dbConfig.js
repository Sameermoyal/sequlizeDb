export const dbConfig={
        HOST:"localhost",
        USER:'root',
        PASSWORD:"sameer",
        DB:"sequlizedb",
        dialect:"mysql",
        pool:{
            min:0,
            max:5,
            idle:3000,
            acquire:10000,
        }
}