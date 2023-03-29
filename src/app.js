const express = require('express')
// usa-se {} quando a importação sera uma funcao
const {uuid} = require('uuidv4')

const app = express();
// para usar um json
app.use(express.json());

// utilizando uma condição
const users = [];

app.get("/hello", (req, res) => {
    res.json({
        hello: "world",
    })
})

// lista os usuarios
app.get('/users', (req, res) => {
    return res.json(users)
})

// cria os usuarios
app.post("/users", (req, res) => {
    const {name, email, city} = req.body

    const user = {id: uuid(), name, email, city}

    users.push(user)

    return res.status(201).json(user)
})

app.listen(3333, () => {
    console.log('server started!')
})