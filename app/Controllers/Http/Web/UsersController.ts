import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UserService'

export default class UsersController {
    public async create({ view }: HttpContextContract) {
        return view.render('index')
    }

    public async store({ request, response }: HttpContextContract) {
        const email = request.input('email', undefined)
        const password = request.input('password', undefined)

        if(!email || !password) {
            response.status(400)
            return response
        }

        const userService = new UserService()
        const user = await userService.create(email, password)

        return user
    }
}
