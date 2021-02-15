const app = require('express')()

const consign = require('consign')
const mongoose = require('mongoose')

require('./config/mongodb')

app.mongoose = mongoose

consign()
    .include('./config/parsers.js')
    .then('./api/validations.js')
    .then('./api')
    .into(app)

const PORT = 3000

app.listen(PORT, () => {
    console.log("Backend running...")
})