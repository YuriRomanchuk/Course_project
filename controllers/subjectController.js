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


module.exports = { createSubject, getSubject};