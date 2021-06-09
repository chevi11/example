const Task=require('../models/task')
const User=require('../models/user')

const createTask=async(req,res)=>{
    console.log('task: ',req.body)
    try{
        const{description,completed}=req.body
        const user= await User.findById(req.params.id)
        const newTask=new Task({description:description,completed:completed,userId:req.params.id}).populate('userId')
        await newTask.save()
        await user.tasks.push(newTask)
        await user.save()
        res.status(200).json({message: 'task created',task:newTask})
    }
    catch(error){
res.status(400).send(error)
    }
}
const taskToDo=async(req,res)=>{
    try {
        const userTaskToDo = (await User.findById(req.params.id))
            .populate({ path: 'tasks', match: { completed: false } })
        res.status(200).json({ userTask: userTaskToDo })
    } catch (error) {
        res.status(400).send(error);
    }
}
module.exports={createTask,taskToDo}