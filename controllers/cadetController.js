const Cadet  = require('../models/Cadet');

const createCadet = async (req , res) => {
    try {
        const { firstName, lastName, email, passwordHash, departmentId, facultyId, group } = req.body;
        const newCadet = new Cadet({
            firstName,
            lastName,
            email,
            passwordHash,
            departmentId,
            facultyId,
            group,
        });
        await newCadet.save()// save new cadet to DB
        res.status(201).json({
            success: true, 
            data: newCadet})
    } catch (error) {
    res.status(500).json({
            success: false, 
            message: "Server error:", error}) ;
    }
};

const getCadet = async (req, res) =>{
    try{
            const cadet = await Cadet.find().populate('departmentId').populate('facultyId');
            res.status(200).json({
                success: true,
                data: cadet
            });
    }catch(error){
            console.error("Error create:",error)
            res.status(500).json({
                success: false,
                message: "Server error", error
            });
}
}

module.exports = { createCadet , getCadet }