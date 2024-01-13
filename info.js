const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('<h1>Home Page</h1>')
})

router.get('/about', (req,res) => {
    res.send('<h1>About Page</h1>')
})

router.get('/contact-us', (req,res) => {
    res.send('<h1>Contact Page</h1>')
})

module.exports = router;