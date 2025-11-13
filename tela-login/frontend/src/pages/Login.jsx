import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api.js";

export default function Login() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function EnviarCredenciais() {
    if (!nome || !email || !senha) {
      alert('erro hahahaa')
    }

    try {
      const body = {
        "nome": nome,
        "email": email,
        "senha": senha
      }

      const resp = await api.post('signup', body)
      console.log(resp.data)

      alert('Certinho pai')
    }

    catch (err) {
      console.log(err)
      alert(err)
      return
    }

  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Cadastro</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={EnviarCredenciais}>Entrar</button>
    </div>
  );
}
