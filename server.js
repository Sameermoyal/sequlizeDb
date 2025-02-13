import express, {json,urlencoded} from "express"
const app=express()
const port =8080;
import sequelize from "./sequilezConfig.js";

app.use(urlencoded({extended:true}))
app.use(json())

app.listen(port,()=>console.log("server running this port",port))
