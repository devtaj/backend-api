// import { success } from "zod";
import authService from "../services/auth.service.js";
import jwt from "../utils/jwt.js"

const registerUser = async (req, res) => {
  try {
    // First, create the user
    const user = await authService.registerUser(req.body);

    // Then generate the token using the user's ID
    const token = jwt.createToken({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);

    const token = jwt.createToken({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
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



export default { registerUser, loginUser, fetchUser, updateUser, deleteUser};
