const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,defult:'Chevi'},
    password:{type:String,require:true,trim:true,minlength:'4'},
    phone:{
        type:String,
        defult:'',
        validate:{
            validator:function(v){
                return /^$|^\d{10}$/.test(v);
            },
            message:props=>`${props.value} is not validate`
        }
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,ref:'tasks'
    }]
})
module.exports=mongoose.model('users',userSchema);