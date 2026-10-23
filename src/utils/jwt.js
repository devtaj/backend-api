import config from "../config/config.js";
import jwt from "jsonwebtoken";

const createToken=(data)=>{
    const token = jwt.sign(data, config.jwtSecret,{
        expiresIn:"30d"
    });
    return token;
}

const verifyToken=(token)=>{
    try {
        const decoded = jwt.verify(token, config.jwtSecret);    
    return decoded;
    } catch (error) {
        throw new Error("Invalid token.");
    }
}
export default {createToken, verifyToken}