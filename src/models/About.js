import mongoose from "mongoose";

const aboutSchema= new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},
{
    timestamps: true,
  }
);


export default mongoose.model("About", aboutSchema);