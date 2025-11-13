import { SignUp } from '../repository/adminController.js'

import { Router } from "express";

const endpoint = Router()

endpoint.post('/signup', async (req, resp) => {
  try {
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha

    const resposta = await SignUp(nome, email, senha)
    resp.send({
      'Usuário Criado': resposta.affectedRows
    })
  }

  catch (error) {
    console.log(error)
  }
})

export default endpoint