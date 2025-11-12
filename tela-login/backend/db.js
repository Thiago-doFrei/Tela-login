import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // seu usuário do MySQL
  password: "misto21@", // sua senha (se tiver)
  database: "tela_login_db"
});

db.connect((err) => {
  if (err) console.log("Erro ao conectar ao MySQL:", err);
  else console.log("✅ Conectado ao MySQL!");
});

export default db;
