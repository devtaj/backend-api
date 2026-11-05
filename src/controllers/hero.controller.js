
import heroService from "../services/hero.service.js";


const postHeroData = async (req, res) => {

  const files= await req.files;
  console.log(files);
  try {
    const response = await heroService.postHeroData(req.body, req.files);

    return res.send({
      status: 201,
      message: "Created Successfully.",
      data: response,
     
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

const fetchHeroData = async (req, res) => {
  try {
    const hero = await heroService.fetchHeroData();
    return res.json({
      
      message: "All Data Fetched Successfully.",
      data: hero,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

const updateHeroData= async(req, res)=>{
  try{
    const heroData= await heroService.updateHeroData(req.params.id, req.files, req.body);
    return res.json({
      status:201,
      success:true,
      message:"Updated Successfully.",
      data:heroData
    })
  }catch(error){
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}

const deleteHeroData= async(req, res)=>{
  try{
    const heroData= await heroService.deleteHeroData(req.params.id);
    return res.json({
      success:true,
      message:"Deleted Successfully.",
      data:heroData
    })
  }catch(error){
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }


}

export default { postHeroData, fetchHeroData, updateHeroData, deleteHeroData};
