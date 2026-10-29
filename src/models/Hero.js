import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({

    tagLine:{
        type:String
    },
    title:{
        type:String,

    },
    slogan:{
        type:String
    },
    description:{
        type:String,
    },
    imageUrl:{
        type:[String]
    }

});

export default mongoose.model("Hero", heroSchema);