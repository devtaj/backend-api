import { success } from "zod";
import aboutService from "../services/about.service.js";


const createAbout = async (req, res) => {
    try {
        

        const about = await aboutService.createAbout(
            req.body,
            req.files
        );

        res.status(201).json({
            success: true,
            message: "About posted successfully",
            data: about
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const fetchAbout= async(req, res)=>{
    try{
        const about= await aboutService.fetchAbout();
    res.status(201).json({
        success:true,
        message:"Fetched Successfully.",
        data:about
    });
    }catch(error){
         res.send(error.message)
    }
}


const updateAbout= async(req, res)=>{
    try{
        const about=await aboutService.updateAbout(req.params.id, req.body);

       return res.status(201).json({
            success:true,
            message:"Updated Successfully.",
            data:about
        })
    }catch(error){
        res.json(error.message)
    }
}

const deleteAbout = async (req, res) => {
  try {
    const about = await aboutService.deleteAbout(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Deleted Successfully.",
      data: about,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export default {createAbout, fetchAbout, updateAbout, deleteAbout}