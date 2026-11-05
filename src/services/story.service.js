import Story from "../models/Story.js";
import uploadFile from "../utils/fileUploader.js";

const createStory= async (data, files, userId)=>{
    const uploadedFiles = await uploadFile(files);
    const storyData= await Story.create({...data, imageUrl: uploadedFiles.map(file => file.url), createdBy: userId});
    return storyData;
}

const fetchStory= async()=>{
    const storyData= await Story.find().populate("createdBy", "name");
    return storyData;
}

const updateStory= async(id, data)=>{
    const storyData= await Story.findByIdAndUpdate(id, data, {
        new:true
    });
    return storyData;
}

const deleteStory= async(id)=>{
    const storyData= await Story.findByIdAndDelete(id);

    return storyData;
}
export default {createStory, fetchStory, updateStory, deleteStory}