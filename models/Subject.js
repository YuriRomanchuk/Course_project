const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    subjectTitle: { 
        type: String, 
        required: true // Це поле обов'язкове
    },
    departmentId:{
             type: mongoose.Schema.Types.ObjectId, 
            ref: 'Department', // Посилання на модель кафедри
            required: true 
        },
   teacherId:{
            type: mongoose.Schema.Types.ObjectId, 
           ref: 'Teacher', // Посилання на модель викладач
           required: false
       },     
}, { 
    timestamps: true // Ця фіча автоматично додасть поля createdAt та updatedAt
});

module.exports = mongoose.model('Subject', subjectSchema);