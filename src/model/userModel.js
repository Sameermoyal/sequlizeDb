import sequelize from "../confige/sequilezConfig.js";
import { DataTypes } from "sequelize";

const User =sequelize.define('User',{
  
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  email:{
    type:DataTypes.STRING,
    unique:true,
  },
  password:{
    type:DataTypes.STRING
  }

}
)

export default User