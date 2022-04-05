const express = require("express")
const Room = require("../models/room")

const router = express.Router()


//Creating New Rooms
router.post("/createRoom", async (req, res) => {
    try{
        var roomInstance = Room(req.body)
        var result = await roomInstance.save()
        res.redirect("/HMS/room/emptyRoom")
    }catch(error){
        res.render('error')
    }
})

router.get("/createRoom", (req, res) => {
    res.render("add_room")
})


//Finding the available Rooms
router.get("/emptyRoom", async (req, res) => {
    try{
        var emptyRooms = await Room.find({"isFilled" : false})
        res.render('empty_list', {"room" : emptyRooms})
    }catch(error){
        res.send(error)
    }
})


//Finding the available AC Rooms
router.get("/ACRoom", async (req, res) => {
    try{
        var acRooms = await Room.find({"isFilled" : false, "isAC" : true})
        res.send(acRooms)
    }catch(error){
        res.send(error)
    }
})


//Getting details of Specific Room
router.get("/roomDetail/:roomId", async (req, res) => {
    try{
        var roomDetail = await Room.find({"_id ": req.params.roomId})
        res.send(roomDetail[0])
    }catch(e){
        res.send(error)
    }
})



module.exports = router