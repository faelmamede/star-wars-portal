module.exports = app => {
    app.post('/characters', app.api.characters.create)
    app.put('/characters/:id', app.api.characters.update)

    app.get('/characters', app.api.characters.get)
    app.get('/characters/:id', app.api.characters.getById)

    app.delete('/characters/:id', app.api.characters.remove)
}