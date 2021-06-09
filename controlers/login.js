const User=require('../models/user')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

const register = async (req, res) => {
    console.log('create user', req.body);
    const currentUser = new User(req.body);
    try {
        await currentUser.save();
        res.status(200).json({
            message: 'user created', user: currentUser
        })
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'chevi7519@gmail.com',
                pass: 'yov37519'
            }
        });
        
        var mailOptions = {
            from: 'chevi7519@gmail.com',
            to: 'chanima715@gmail.com',
            subject: 'Wellcom to our site',
            text: 'hello'
        };
        
        const mail = transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        
    } catch (error) {
        res.status(400).send('error')
    }
};

const login = async (req, res) => {
    console.log("id user: ", req.params.id)
    try {
        const user = (await User.findById(req.params.id)).populate("tasks")
        res.status(200).json({ myUser: user });
    }
    catch (error) {
        res.status(400).send(error)
    }
}
module.exports={register,login}