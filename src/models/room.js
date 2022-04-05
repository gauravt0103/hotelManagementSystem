const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    "roomNumber": {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    "numberOfBeds": {
        type: Number,
        required: true,
        trim: true
    },
    "isFilled": {
        type: Boolean,
        required: true,
        trim: true,
        default: false
    },
    "occupiedBeds" :{
        type: Number,
        required: true,
        trim: true,
        default: 0
    },
    "isAC" : {
        type: Boolean,
        required: true,
        trim: true,
        default: false
    },
    "costPerBed" : {
        type: Number,
        required: true,
        trim: true
    }
})

const Room = new mongoose.model("Room", roomSchema)
module.exports = Room