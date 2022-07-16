const { application } = require("express")
const express = require("express")

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
        date: Date.now() 
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
        date: Date.now() 
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
        msg: "Record retrieved successfully!"
    })
})

app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`))