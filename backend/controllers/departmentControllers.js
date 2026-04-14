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
        const {allDepartments} = req.body; 
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

module.exports = { createDepartment, getDepartments };
