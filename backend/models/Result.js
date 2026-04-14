const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    cadetId:{
             type: mongoose.Schema.Types.ObjectId, 
            ref: 'Cadet', // Посилання на модель курсант
            required: true 
        },
     subjectId:{
            type: mongoose.Schema.Types.ObjectId, 
           ref: 'Subject', // Посилання на модель предмет
           required: true 
       },      
   teacherId:{
            type: mongoose.Schema.Types.ObjectId, 
           ref: 'Teacher', // Посилання на модель викладач
           required: true 
       },  
    grade:{
        type: Number,
        required: true
    }     
}, { 
    timestamps: true // Ця фіча автоматично додасть поля createdAt та updatedAt
});

module.exports = mongoose.model('Result', resultSchema);