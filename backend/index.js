const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const consign = require('consign')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/star_wars_portal', { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'))

app.mongoose = mongoose

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

consign()
    .include('./api/validations.js')
    .include('./api')
    .into(app)

const PORT = 3000

app.listen(PORT, () => {
    console.log("Backend running...")
})