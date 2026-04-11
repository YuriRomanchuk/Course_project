const mongoose = require('mongoose');

const cadetSchema = new mongoose.Schema({
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
    group:{
        type: String,
        required: true
    },
    facultyId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Faculty', // Посилання на модель факультету
        required: true 
    }
}, { 
    timestamps: true // Ця фіча автоматично додасть поля createdAt та updatedAt
});

module.exports = mongoose.model('Cadet', cadetSchema);