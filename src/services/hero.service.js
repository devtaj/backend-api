import uploadFile from "../utils/fileUploader.js";
import Hero from "../models/Hero.js";
import { input } from "zod";

const postHeroData= async(userData,files)=>{
    const uploadedFiles= await uploadFile(files)
    const data= await Hero.create({...userData, imageUrl:uploadedFiles.map((file)=>file.url)} );
    return data;
}


const fetchHeroData= async()=>{
    const data= await Hero.find();
    return data;
}
const updateHeroData = async (id, files, data) => {
  const updateData = { ...data };

  if (files && files.length > 0) {
    const uploadedFiles = await uploadFile(files);

    updateData.imageUrl = uploadedFiles.map((file) => file.url);
  }

  const dataHero = await Hero.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );

  return dataHero;
};
const deleteHeroData= async(id)=>{
    const dataHero= await Hero.findByIdAndDelete(id);
    return dataHero;
}
export default {postHeroData, fetchHeroData, updateHeroData, deleteHeroData}