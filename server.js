const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const router=require('./routes/api')
// const request=require('request');

dotenv.config()
app.listen(5000, () => {
    console.log('listening')
})
app.use(bodyParser.json())
app.use('/', router)

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
mongoose.connect(process.env.DB_CONNECT, connectionParams
).then(() => console.log('mongoDb Connected!!')
).catch((err) => {
    console.log("err ", err)
})

