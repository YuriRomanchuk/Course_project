const Faculty = require('../models/Faculty'); // import model

const createFaculty = async (req , res) => {
    try{
        const {facultyName} = req.body; // витягую поле з тіла запиту 
        //створюю новий екземпляр 
        const newFaculty = new Faculty({
            facultyName: facultyName
        })
        // зберігаю в БД
        await newFaculty.save()
        
        res.status(201).json({
            success: true,
            data: newFaculty
        });

    }catch(error){
        console.error("Error create:",error)
         res.status(500).json({
            success: false,
            message: "Server error:("
        });
    }
}

const getFaculty = async (req, res) =>{
    try{
            const faculty = await Faculty.find();
            res.status(200).json({
                success: true,
                data: faculty
            });
    }catch(error){
            console.error("Error create:",error)
            res.status(500).json({
                success: false,
                message: "Server error", error
            });
}
}

const updateFaculty = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFaculty = await Faculty.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedFaculty) {
            return res.status(404).json({ success: false, message: 'Faculty not found' });
        }
        res.status(200).json({ success: true, data: updatedFaculty });
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ success: false, message: "Server error", error });
    }
};

const deleteFaculty = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFaculty = await Faculty.findByIdAndDelete(id);
        if (!deletedFaculty) {
            return res.status(404).json({ success: false, message: 'Faculty not found' });
        }
        res.status(200).json({ success: true, message: 'Faculty deleted successfully' });
    } catch (error) {
        console.error("Error deleting:", error);
        res.status(500).json({ success: false, message: "Server error", error });
    }
};

module.exports = { createFaculty, getFaculty, updateFaculty, deleteFaculty };