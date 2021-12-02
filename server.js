require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static('dist'))

app.listen(process.env.PORT, () => {
    console.log(`APP listening at ${process.env.PORT}`)
})