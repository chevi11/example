const router = require('express').Router();
const Login = require('../controlers/login')
const Profile=require('../controlers/profile')
const toDoList=require('../controlers/toDoList') 

router.get('/login/:id', Login.login)
router.post('/register', Login.register)
router.post('/updateUser/:id',Profile.updateUser)
router.get('/deleteUser/:id',Profile.deleteUser)
router.post('/createTask/:id',toDoList.createTask)
router.get('/taskToDo/:id',toDoList.taskToDo)
module.exports = router;