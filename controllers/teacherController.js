const Teacher  = require('../models/Teacher');

const createTeacher = async (req , res) => {
    try {
        const { firstName, lastName, email, passwordHash, departmentId } = req.body;
        const newTeacher = new Teacher({
            firstName,
            lastName,
            email,
            passwordHash,
            departmentId
        });
        await newTeacher.save()// save new teacher to DB
        res.status(201).json({
            success: true, 
            data: newTeacher})
    } catch (error) {
       res.status(500).json({
            success: false, 
            message: "Server error:", error}) ;
    }
};

const getTeacher = async (req, res) =>{
    try{
            const teacher = await Teacher.find().populate('departmentId');
            res.status(200).json({
                success: true,
                data: teacher
            });
    }catch(error){
            console.error("Error create:",error)
             res.status(500).json({
                success: false,
                message: "Server error", error
            });
}
}

module.exports = { createTeacher , getTeacher }