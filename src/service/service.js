import  {findExistingUser,saveNewUser} from "../repository/repository.js"

//logic part

export const registerNewUser=async(data)=>{
    try {
          
      const existingUser=await findExistingUser(data.email)

      if(existingUser){
        return "user all ready registerd"
      }
 

   

      const user=await saveNewUser({name:data.name,email:data.email,password:data.password})

 console.log("saveNewUser" ,user)

      return user

    } catch (error) {
      console.error("Error in registerNewUser:", error.message || error);
    }
}