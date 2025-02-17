import * as index from "../model/index.js"

//database function

console.log("📌 index contents:", index);

export const findExistingUser = async (email) => {
   console.log("🔍 Checking user existence:", email);
   console.log("📌 userModel in index:", index.userModel); // Debugging line
 
   return await index.userModel?.findOne({ where: { email } });
 };

export const saveNewUser = async (data) => {
   try {
     console.log("📝 Attempting to save user:", data);
 
     const newUser = await index.userModel.create(data);
     
     console.log("✅ User saved:", newUser);
     return newUser;
   } catch (error) {
     console.error("❌ Error saving user:", error);
   }
 };
 