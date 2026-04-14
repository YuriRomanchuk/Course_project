const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    departmentName: { 
        type: String, 
        required: true // Це поле обов'язкове
    },
}, { 
    timestamps: true // Ця фіча автоматично додасть поля createdAt та updatedAt
});

module.exports = mongoose.model('Department', departmentSchema);