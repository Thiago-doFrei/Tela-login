import db from "../db.js";
import bcrypt from "bcrypt";

export const cadastrarUsuario = (req, res) => {
  const { nome, email, senha } = req.body;
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length > 0) return res.status(400).json({ msg: "Usuário já existe!" });

    const senhaHash = bcrypt.hashSync(senha, 10);
    db.query("INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, 'usuario')",
      [nome, email, senhaHash],
      (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ msg: "Usuário cadastrado com sucesso!" });
      }
    );
  });
};

export const loginUsuario = (req, res) => {
  const { email, senha } = req.body;
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ msg: "Usuário não encontrado!" });

    const usuario = result[0];
    const senhaCorreta = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaCorreta) return res.status(401).json({ msg: "Senha incorreta!" });

    res.json({ msg: "Login realizado com sucesso", usuario });
  });
};
