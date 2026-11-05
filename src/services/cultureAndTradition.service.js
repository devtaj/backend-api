import CultureandTraditins from "../models/CultureandTraditins.js";
import uploadFile from "../utils/fileUploader.js";
const createCultureandTraditins= async (data, files, userId)=>{
    const uploadedFiles = await uploadFile(files);
    const cultureandTraditinsData= await CultureandTraditins.create({...data, imageUrl: uploadedFiles.map(file => file.url), createdBy: userId});
    return cultureandTraditinsData;
}

const fetchCultureandTraditins= async()=>{
    const cultureandTraditinsData= await CultureandTraditins.find().populate("createdBy", "name");
    return cultureandTraditinsData;
}
const updateCultureandTraditions= async(id, data)=>{
    const cultureandTraditionsData= await CultureandTraditins.findByIdAndUpdate(id, data,{
        new:true
    });
    return cultureandTraditionsData;
}

const deleteCultureandTraditions= async(id)=>{
    const cultureandTraditions= await CultureandTraditins.findByIdAndDelete(id);
    return cultureandTraditions;
}

export default {createCultureandTraditins, fetchCultureandTraditins, updateCultureandTraditions, deleteCultureandTraditions}