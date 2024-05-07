import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    family : {type : String, required : true},
    phone : {type : String, required : true , unique: true},
    birthDay : {type : Object, required : true}
 })

 export default mongoose.model("User" , userSchema)