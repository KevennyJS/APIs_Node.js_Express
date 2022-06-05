const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Precisa de um nome'],
        trim: true,
        maxlength: [50, 'Nome não pode ser maior que 50 caracteres']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)