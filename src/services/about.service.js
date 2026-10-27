import About from "../models/About.js";

const createAbout= async (data)=>{
    const aboutData= await About.create(data);
    return aboutData;
}

const fetchAbout= async()=>{
    const aboutData= await About.find();
    return aboutData;
}

const updateAbout= async(id, data)=>{
    const aboutData= await About.findByIdAndUpdate(id, data,{
        new:true,
         runValidators: true
    });
    return aboutData;
}

const deleteAbout = async (id) => {
    const aboutData = await About.findByIdAndDelete(id);

    if (!aboutData) {
        throw new Error("About data not found");
    }

    return aboutData;
};

export default {createAbout, fetchAbout, updateAbout, deleteAbout}