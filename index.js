const express = require('express')
const upload = require('./upload')


const app = express()
app.use(express.json())
app.use(express.static('public'))

const PORT = 3001


// simulando o banco, galeros
const users = []

app.post('/upload', upload.single('image'), (req, res) => {
  const imageUrl = req.file.path

  // simlando salvar no banco
  const user = {
    id: users.length + 1,
    name: req.body.name,
    profilePicture: imageUrl
  }

  users.push(user)

  res.json({
    message: "imagem enviada com sucesso",
    data: user
  })
})

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
})
