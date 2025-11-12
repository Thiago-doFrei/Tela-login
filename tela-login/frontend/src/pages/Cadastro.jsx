import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleCadastro(e) {
    e.preventDefault();
    try {
      const res = await api.post("/cadastro", { nome, email, senha });
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
      <h1 className="text-3xl mb-6">Cadastro</h1>
      <form onSubmit={handleCadastro} className="flex flex-col bg-white text-black p-6 rounded-lg w-80">
        <input
          type="text"
          placeholder="Nome"
          className="p-2 mb-3 border rounded"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          className="p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="p-2 mb-3 border rounded"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit" className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
