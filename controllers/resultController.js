const Result  = require('../models/Result');

const createResult = async (req , res) => {
    try {
        const { cadetId, subjectId, teacherId, grade } = req.body;
        const newResult = new Result({
            cadetId,
            subjectId,
            teacherId,
            grade
        });
        await newResult.save()// save new Result to DB
        res.status(201).json({
            success: true, 
            data: newResult})
    } catch (error) {
    res.status(500).json({
            success: false, 
            message: "Server error:", error}) ;
    }
};

const getResult = async (req, res) =>{
    try{
            const result = await Result.find().populate('cadetId').populate('subjectId').populate('teacherId');
            res.status(200).json({
                success: true,
                data: result
            });
    }catch(error){
            console.error("Error create:",error)
            res.status(500).json({
                success: false,
                message: "Server error", error
            });
}
}


module.exports = { createResult, getResult};