import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'

export default class PostsController {
    public async index({}: HttpContextContract) {
        return null
    }

    public async destroy({}: HttpContextContract) {
        return null
    }


    public async update({}: HttpContextContract) {
        return null
    }

    public async store({ request, response }: HttpContextContract) {
        const title = request.input('title', undefined)
        const content = request.input('content', undefined)
        const authorId = request.input('authorId', undefined)

        if(!title || !content || !authorId) {
            response.status(400)
            return response
        }

        const post = await Post.create({
            content,
            title,
            authorId
        })

        return post
    }

    public async show({}: HttpContextContract) {
        return null
    }
}
