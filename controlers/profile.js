const User=require('../models/user')
const updateUser=async(req,res)=>{
    const userId=req.params.id
    try{
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    console.log("updateUser: ",updateUser)
    res.status(200).json({message: 'user updated', userUpdate: updateUser})
}
catch(error){
res.status(400).send(error)
}
}
const deleteUser=async(req,res)=>{
    try{
   const deleteUser=await User.findByIdAndDelete(req.params.id)
   res.status(200).json({message:'user deleted'})
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports={updateUser,deleteUser}