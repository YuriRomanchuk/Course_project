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

module.exports = { createFaculty, getFaculty};