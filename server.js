const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express()
app.use(cors());
app.use(express.json()) 
const facultyRoutes = require('./routes/facultyRoutes') // import fucultyRoutes
const departmentRoutes = require('./routes/departmentRoutes') // import departmentRoutes


mongoose.connect(process.env.MONGO_URI)
    .then(() => {console.log("DB Connected")})
    .catch((err) => {console.log("DB Connection Error: ", err)});


    app.use('/api/faculties',facultyRoutes);
    app.use('/api/departments',departmentRoutes);

    const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log("Server started")
})    


