const express = require("express")

const app = express()

const PORT = process.env.PORT || 4001

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to HomePage!"
    })
})

app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`))