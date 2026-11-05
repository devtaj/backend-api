import { success } from "zod";
import cultureAndTraditionService from "../services/cultureAndTradition.service.js";

const createCultureandTraditins = async (req, res) => {
  try {
    const userId = req.user?._id;

    console.log("User ID from request:", userId); // Log the user ID for debugging

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User ID missing from authentication token",
      });
    }

    const cultureandTraditins =
      await cultureAndTraditionService.createCultureandTraditins(
        req.body,
        req.files,
        userId
      );

    return res.status(201).json(cultureandTraditins);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const fetchCultureandTraditins = async (req, res) => {

  try {
    const cultureandTraditins =
      await cultureAndTraditionService.fetchCultureandTraditins();
    res.status(200).json(cultureandTraditins);
  } catch (error) {
    res.send(error.message);
  }
};

const updateCultureandTraditions= async(req, res)=>{
    try{
        const cultureandTraditions= await cultureAndTraditionService.updateCultureandTraditions(req.params.id, req.body);
        return res.status(201).json({
            success:true,
            message:"Updated Successfully.",
            data:cultureandTraditions
        });
    }catch(error){
        res.json(error.message);
    }
}


const deleteCultureandTraditions= async(req, res)=>{
    try{
        const cultureandTraditions= await cultureAndTraditionService.deleteCultureandTraditions(req.params.id);
        return res.status(201).json({
            success:true,
            message:"Deleted Successfully.",
            data:cultureandTraditions
        });
    }catch(error){
        res.json(error.message)
    }
}

export default { createCultureandTraditins, fetchCultureandTraditins, updateCultureandTraditions,deleteCultureandTraditions };
