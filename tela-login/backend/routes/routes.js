import Admin from '../controllers/adminController.js'

export default function AdicionarRotas(app) {
    app.use(Admin)
}