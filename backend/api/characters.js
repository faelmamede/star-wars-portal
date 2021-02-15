module.exports = app => {

    const { existsOrError, notExistsOrError } = app.api.validations

    const Characters = app.mongoose.model('Characters', {
        name: String,
        age: Number
    })

    const create = (req, res) => {
        const character = { ...req.body }

        try {
            existsOrError(character.name, 'Nome não informado!')
            existsOrError(character.age, 'Idade não informada!')

        } catch (msg) {
            return res.status(400).send(msg)
        }

        const newCharacter = new Characters({
            name: character.name,
            age: character.age
        })
        newCharacter.save(function (err) {
            if (err) {
                res.status(500).send(err)
            }
            res.send('Criado com sucesso')
        })
    }

    const get = async (req, res) => {
        await Characters.find({}, (err, character) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.json(character)
            }
        })
    }

    const getById = async (req, res) => {
        await Characters.findById(req.params.id, (err, character) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.json(character)
            }
        })
    }

    const remove = async (req, res) => {
        await Characters.deleteOne(req.param.id, (err) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send("Personagem removido!")
            }
        })
    }

    return { create, get, getById, remove }
}