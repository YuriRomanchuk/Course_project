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

const updateTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedTeacher) {
            return res.status(404).json({ success: false, message: 'Teacher not found' });
        }
        res.status(200).json({ success: true, data: updatedTeacher });
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ success: false, message: "Server error", error });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTeacher = await Teacher.findByIdAndDelete(id);
        if (!deletedTeacher) {
            return res.status(404).json({ success: false, message: 'Teacher not found' });
        }
        res.status(200).json({ success: true, message: 'Teacher deleted successfully' });
    } catch (error) {
        console.error("Error deleting:", error);
        res.status(500).json({ success: false, message: "Server error", error });
    }
};

module.exports = { createTeacher, getTeacher, updateTeacher, deleteTeacher }