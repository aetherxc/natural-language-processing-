// app
const express = require('express')
const app = express()

// home route
app.get('/', (req, res) => {
    res.send('hello')
})

// set port
const PORT = process.env.PORT || 3000

// listener 
app.listen(PORT, () => {
    console.log(`Project 4 app listening at http://localhost:${PORT}`)
}) 