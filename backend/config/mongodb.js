const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/star_wars_portal', { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Problem to connect with MongoDB.'))