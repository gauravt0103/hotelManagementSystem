const express = require("express")
const Room = require("../models/room")
const Student = require("../models/student")

const router = express.Router()

router.post("/student", async (req, res) => {
    try{
        const studentInstance = Student(req.body)
        var roomNumber = req.body.roomAllocated
        var room = await Room.find({"roomNumber" : roomNumber})
        var occupiedBed = room[0].occupiedBeds + 1
        var flag = false
        if(occupiedBed == room[0].numberOfBeds)
            flag = true
        if(occupiedBed > room[0].numberOfBeds){
            res.render('error')
        }
        else{
            var resu = await Room.updateOne({"_id" : room}, {$set : {"occupiedBeds":occupiedBed, "isFilled" : flag}})
            const result = await studentInstance.save()
            res.redirect('/HMS/studentList')
        }
    }catch(error){
        res.render('error')
    }
})

router.get("/student" , (req, res) => {
    res.render('add_student')
})

router.get("/studentList", async(req, res) => {
    var studentList = await Student.find()
    res.render("student_list" , {"student" : studentList})
})

router.get("/student/:studentId", async (req, res) => {
    var student = await Student.find({"_id" : req.params.studentId})
    res.send(student);
})


module.exports = router