// import { success } from "zod";
import authService from "../services/auth.service.js";
import jwt from "../utils/jwt.js"

const registerUser = async (req, res) => {
  try {
    const token= jwt.createToken(user)
    const verifiedToken= jwt.verifyToken(token)
    
    res.cookie("authToken", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Invalid Credintial!" });
  }
};

const fetchUser= async(req, res)=>{
  try{
    const user= await authService.fetchUser();
    res.status(201).json(user);
  }catch(error){
    throw{
      status:404,
      message:"User not found."
    }
  }
}

const updateUser=async(req, res)=>{
  try{
    const user= await authService.updateUser(
      req.params.id,
      req.body
    );
    res.status(201).json({
      message:"User Updated Successfully.",
      data:user
    })
  }catch(error){
    throw{
      message:"User not found"
    }
  }
}

const deleteUser= async(req, res)=>{
  try{
    const user= await authService.deleteUser(req.params.id);
    res.status(201).json({
      throw:{
        message:"User deleted Successfully.",
        data:user
      }
    }) 
  }catch(error){
    throw{
      status:403,
      message:"User not found"
    }
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);

    const token= jwt.createToken(user)
    const verifiedToken= jwt.verifyToken(token)
    
    res.cookie("authToken", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
     res.status(201).json(
      {
      success:true,
      message:"Login Successfully",
      data:{...user, token}
    }
     );
     
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { registerUser, loginUser, fetchUser, updateUser, deleteUser};
