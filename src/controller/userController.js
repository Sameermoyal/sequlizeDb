import {registerNewUser} from "../service/service.js"

// only write req,res

export const register =async(req,res)=>{
   const{name,email,password}=req.body;

  if(!name || !email || !password){
    return res.status(400).json({message :"required all fields"})
  }   

 const newUser=await  registerNewUser(req.body)

return res.status(201).json({message:"user register successfully",newUser})

}