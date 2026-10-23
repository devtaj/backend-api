import User from "../models/Auth.js";
import bcrypt from "bcrypt";

const registerUser = async (data) => {
  try {
    const salt =  bcrypt.genSaltSync(10);
    const hashedPassword =  bcrypt.hashSync(data.password, salt);
    const user = await User.create({ ...data, password: hashedPassword });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error.");
  }
};

const fetchUser = async () => {
  try {
    const user = await User.find();

    if (!user) {
      throw {
        status: 404,
        message: "User not found.",
      };
    }
    return user;
  } catch (error) {
    throw {
      status: 404,
      message: "User not found.",
    };
  }
};
const updateUser= async(id, data)=>{
  try{
    const updatedUser= await User.findByIdAndUpdate(id, data,{
      new:true,
    });
    return updatedUser;
  }catch(error){
    throw{
      status:403,
      message:"Invalid credintial!"
    }
  }
}

const deleteUser= async(id)=>{
  const user= await User.findByIdAndDelete(id)
 
  return user;
}


const loginUser = async (data) => {
  const user = await User.findOne({
    $or: [{ email: data.email }, { phone: data.phone }],
  });

  if (!user) {
    throw {
      status: 404,
      message: "Invalid Credintial.",
    };
  }

  const isPasswordMatch =  bcrypt.compareSync(
    data.password,
    user.password,
  );

  if (!isPasswordMatch) {
    throw {
      status: 404,
      message: "Invalid Password.",
    };
  }

  return{
    _id:user.id,
    name:user.name
  }
};

export default { registerUser, loginUser, fetchUser, updateUser, deleteUser };
