
import Hero from "../models/Hero.js";

const postHeroData= async(userData)=>{
    const data= await Hero.create(userData);
    return data;
}


const fetchHeroData= async()=>{
    const data= await Hero.find();
    return data;
}
const updateHeroData= async(id, data)=>{
    const dataHero= await Hero.findByIdAndUpdate(id, data,{
        new:true,
    });
    return dataHero;

}
const deleteHeroData= async(id)=>{
    const dataHero= await Hero.findByIdAndDelete(id);
    return dataHero;
}
export default {postHeroData, fetchHeroData, updateHeroData, deleteHeroData}