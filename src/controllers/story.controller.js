
import { success } from "zod";
import storyService from "../services/story.service.js";


const createStory = async (req, res) => {
  try {
    const userId = req.user?._id;
    console.log(userId);
    const story= await storyService.createStory(req.body, req.files, userId);
    res.status(201).json({
        success:true,
        message:"Story Created Successfully.",
        data:story
    })
    
  }catch(error){
    res.json(error.message)
  }
  
}

const fetchStory= async(req, res)=>{
    try{
        const storyData= await storyService.fetchStory();
    res.status(201).json({
        success:true,
        message:"Story Fetched Successfully",
        data:storyData
    });
    }catch(error){
        res.json(error.message)
    }
}
const updatStory= async(req, res)=>{
    try{
        const storyData= await storyService.updateStory(req.params.id, req.body);
        res.status(201).json({
            success:true,
            message:"Updated Successfully.",
            data:storyData
        })
    }catch(error){
        res.json(error.message)
    }
}

const deleteStory=async(req, res)=>{
    const storyData= await storyService.deleteStory(req.params.id);
    res.status(201).json({
        success:true,
            message:"Deleted Successfully.",
            data:storyData
    })
}

export default {createStory, fetchStory, updatStory, deleteStory}