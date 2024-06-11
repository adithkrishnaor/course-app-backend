const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const courses = require("./models/courses")
const {coursemodel} =require("./models/courses")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://adith:adith@cluster0.7mlz85p.mongodb.net/courseapp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req,res) => {
    let input = req.body
    let courses= new coursemodel(input)
    courses.save()
    console.log(courses)
    res.json({"status":"success"})
})

app.get("/view",(req,res) => {
    coursemodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
    console.log(res)
})

app.listen(8080, () => {
    console.log("Server Started")
})