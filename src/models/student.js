const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    "studentName": {
        type: String,
        required: true,
        trim: true
    },
    "homeTownAddress": {
        type: String,
        required: true,
        trim: true
    },
    "phoneNumber": {
        type: Number,
        required: true,
        trim: true,
    },
    "gaurdianPhoneNumber" :{
        type: Number,
        required: true,
        trim: true,
    },
    "roomAllocated" : {
        type: String,
        required: true,
        trim: true,
    },
    "yearOfGraduation" : {
        type: String,
        required: true,
        trim: true,
    },
    "Branch" :{
        type: String,
        required: true,
        trim: true,
    },

})

const Student = new mongoose.model("Student", studentSchema)
module.exports = Student