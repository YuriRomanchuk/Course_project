const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true // Це поле обов'язкове
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    departmentId:{
         type: mongoose.Schema.Types.ObjectId, 
        ref: 'Department', // Посилання на модель кафедри
        required: true 
    },
}, { 
    timestamps: true // Ця фіча автоматично додасть поля createdAt та updatedAt
});

module.exports = mongoose.model('Teacher', teacherSchema);