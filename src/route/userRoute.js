import express from "express"
const router=express.Router()
import {register} from "../controller/userController.js"

router.post('/signup',register)

export default router;








