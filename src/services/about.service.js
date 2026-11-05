import About from "../models/About.js";
import uploadFile from "../utils/fileUploader.js";

const createAbout = async (data, files) => {
    const uploadedFiles = await uploadFile(files);
    console.log(uploadedFiles);

    const aboutData = await About.create({
        ...data,
        imageUrl: uploadedFiles.map(file => file.url)
    });

    return aboutData;
};

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