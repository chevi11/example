const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    }
})
module.exports = mongoose.model('tasks', taskSchema);
