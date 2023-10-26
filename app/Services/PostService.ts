import User from 'App/Models/User'
import Post from 'App/Models/Post'

export default class UsersController {
  constructor() {}

  public async create(user: User, data: {
    title: string,
    content: string
  }) {
    const post = new Post()
    post.title = data.title
    post.content = data.content
    post.userId = user.id

    await post.save()

    return post
  }
}
