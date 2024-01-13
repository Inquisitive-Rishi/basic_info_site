const info = require('./info')
const express = require('express')
const app = express()
const PORT = 8000;

app.use('/info', info)

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})