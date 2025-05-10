const express = require('express')
const upload = require('./upload')
const { PrismaClient } = require('@prisma/client')
require('dotenv').config()

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(express.static('public'))

const PORT = 3001

app.post('/upload', upload.single('image'), async (req, res) => {

  try {
    const imageUrl = req.file.path
    const name = req.body.name

    const user = await prisma.user.create({
      data: {
        name,
        profilePicture: imageUrl
      }
    })

    res.json({
      message: "Imagem enviada com sucesso para o <b>Cloudinary</b>! Dá uma olhada lá, galeros! 😎",
      data: user
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar no banco' })
  }
})

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
})
