import express, {json,urlencoded} from "express"
const app=express()
const port =8080;
import sequelize from "./src/confige/sequilezConfig.js";
import userRoute from './src/route/userRoute.js'

app.use(urlencoded({extended:true}))
app.use(json())

app.use("/auth",userRoute)


app.listen(port,()=>console.log("server running this port",port))
