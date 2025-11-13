import { connection } from "./db.js"

export async function SignUp(nome, email, senha) {
    let [resultados] = await connection.query(`
        insert into cadastro (nome, email, senha)
        values
        (?,?,?)
    `, [nome, email, senha])

    return resultados
}