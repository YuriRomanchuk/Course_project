const Subject = require('../models/Subject'); // import model

const createSubject = async (req , res) => {
    try{
        const {subjectTitle, departmentId,teacherId} = req.body; // витягую поле з тіла запиту 
        const newSubject = new Subject({
            subjectTitle,
            departmentId
                });
        // зберігаю в БД
        await newSubject.save()
        
        res.status(201).json({
            success: true,
            data: newSubject
        });

    }catch(error){
        console.error("Error create:",error)
        res.status(500).json({
            success: false,
            message: "Server error:("
        });
    }
}

const getSubject = async (req, res) =>{
    try{
            const subject = await Subject.find();
            res.status(200).json({
                success: true,
                data: subject
            });
    }catch(error){
            console.error("Error create:",error)
            res.status(500).json({
                success: false,
                message: "Server error", error
            });
}
}



const updateSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSubject = await Subject.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedSubject) {
            return res.status(404).json({ success: false, message: 'Subject not found' });
        }
        res.status(200).json({ success: true, data: updatedSubject });
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ success: false, message: "Server error", error });
    }
};

const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSubject = await Subject.findByIdAndDelete(id);
        if (!deletedSubject) {
            return res.status(404).json({ success: false, message: 'Subject not found' });
        }
        res.status(200).json({ success: true, message: 'Subject deleted successfully' });
    } catch (error) {
        console.error("Error deleting:", error);
        res.status(500).json({ success: false, message: "Server error", error });
    }
};

module.exports = { createSubject, getSubject, updateSubject, deleteSubject };