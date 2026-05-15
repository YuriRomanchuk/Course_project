const Department = require('../models/Department'); // import model

const createDepartment = async (req , res) => {
    try{
        const {departmentName} = req.body; // витягую поле з тіла запиту 
        //створюю новий екземпляр 
        const newDepartment = new Department({
            departmentName: departmentName
        })
        // зберігаю в БД
        await newDepartment.save()
        
        res.status(201).json({
            success: true,
            data: newDepartment
        });

    }catch(error){
        console.error("Error create:",error)
         res.status(500).json({
            success: false,
            message: "Server error:("
        });
    }
}

const getDepartments = async (req , res) => {
    try{
        const departments = await Department.find();
        
        res.status(200).json({
            success: true,
            data: departments
        });
    }catch(error){
        console.error("Error create:",error)
         res.status(500).json({
            success: false,
            message: "Server error:("
        });
    }

    
    
}

const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDepartment = await Department.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedDepartment) {
            return res.status(404).json({ success: false, message: 'Department not found' });
        }
        res.status(200).json({ success: true, data: updatedDepartment });
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ success: false, message: "Server error", error });
    }
};

const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDepartment = await Department.findByIdAndDelete(id);
        if (!deletedDepartment) {
            return res.status(404).json({ success: false, message: 'Department not found' });
        }
        res.status(200).json({ success: true, message: 'Department deleted successfully' });
    } catch (error) {
        console.error("Error deleting:", error);
        res.status(500).json({ success: false, message: "Server error", error });
    }
};

module.exports = { createDepartment, getDepartments, updateDepartment, deleteDepartment };
