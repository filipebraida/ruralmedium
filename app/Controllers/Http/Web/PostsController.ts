import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async create({ view }: HttpContextContract) {
    return view.render('posts/create')
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async patch({}: HttpContextContract) {}

  public async index({ view }: HttpContextContract) {
    return view.render('posts/index')
  }
}
