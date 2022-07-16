const { application } = require("express")
const express = require("express")
const format = require('date-format')

const app = express()

const PORT = process.env.PORT || 4001

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to HomePage!"
    })
})

/*
  @auther Chandan Rout
  @return Instagram data of User
*/
app.get('/api/v1/instagram', (req, res) => {
    const instagramData = {
        api: "Instagram API",
        username: "_chandan__rout",
        followers: 90,
        following: 88,
        date: format.asString('dd/mm/yy hh:mm:ss', new Date()) 
    }
    res.status(200).json(instagramData)
})

/*
  @auther Chandan Rout
  @return Linkedin data of User
*/
app.get('/api/v1/linkedin', (req, res) => {
    const instagramData = {
        api: "Linkedin API",
        username: "chandan632",
        connection: 208,
        date: format.asString('dd/mm/yy hh:mm:ss', new Date()) 
    }
    res.status(200).json(instagramData)
})

/*
 @auther Chandan Rout
 @param Token -> Token is whatever user typed after /api/v1/
 @return Json data -> Whatever user typed server send it's back
*/
app.get('/api/v1/:token', (req, res) => {
    res.status(200).json({
        token: req.params.token,
        date: format.asString('dd/mm/yy hh:mm:ss', new Date()),
        msg: "Record retrieved successfully!"
    })
})

app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`))