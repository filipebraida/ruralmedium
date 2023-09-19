import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

interface Post {
    id: number,
    title: string,
    content: string,
    authorId: string,
}

var totalPosts = 0

const posts: Post[] = []

export default class PostsController {
    public async index({}: HttpContextContract) {
        return posts
    }

    public async destroy({}: HttpContextContract) {
        return posts
    }


    public async update({}: HttpContextContract) {
        return posts
    }

    public async store({ request, response }: HttpContextContract) {
        const title = request.input('title', undefined)
        const content = request.input('content', undefined)
        const authorId = request.input('authorId', undefined)

        if(!title || !content || !authorId) {
            response.status(400)
            return response
        }

        const post: Post = {
            id: totalPosts,
            title,
            content,
            authorId
        }

        totalPosts += 1

        posts.push(post)

        return post
    }

    public async show({ request, response }: HttpContextContract) {
        const id = request.param('id')

        const post = posts[id]

        if(!post) {
            response.status(404)
            return "404"
        }

        return posts[id]
    }
}
