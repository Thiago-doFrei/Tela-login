import db from "../db.js";
import bcrypt from "bcrypt";

export const loginAdmin = (req, res) => {
  const { email, senha } = req.body;
  db.query("SELECT * FROM usuarios WHERE email = ? AND tipo = 'admin'", [email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ msg: "Admin não encontrado!" });

    const admin = result[0];
    const senhaCorreta = bcrypt.compareSync(senha, admin.senha);
    if (!senhaCorreta) return res.status(401).json({ msg: "Senha incorreta!" });

    res.json({ msg: "Login de admin bem-sucedido", admin });
  });
};

export const listarUsuarios = (req, res) => {
  db.query("SELECT id, nome, email, tipo FROM usuarios", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ total: result.length, usuarios: result });
  });
};
