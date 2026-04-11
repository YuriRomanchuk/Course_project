const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    facultyName: { 
        type: String, 
        required: true // Це поле обов'язкове
    },
}, { 
    timestamps: true // Ця фіча автоматично додасть поля createdAt та updatedAt
});

module.exports = mongoose.model('Faculty', facultySchema);