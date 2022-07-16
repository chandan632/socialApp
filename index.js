const express = require("express")

const app = express()

const PORT = process.env.PORT || 4001

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to HomePage!"
    })
})

/*
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