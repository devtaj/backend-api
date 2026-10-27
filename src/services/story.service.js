import Story from "../models/Story.js";

const createStory= async (data, userId)=>{
    const storyData= await Story.create({...data, createdBy: userId});
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