import User from 'App/Models/User'
import Post from 'App/Models/Post'
import Application from '@ioc:Adonis/Core/Application'
import FileService from './FileService'

export default class UsersController {
  constructor() {}

  public async create(
    user: User,
    data: {
      title: string
      content: string
      cover: any
    }
  ) {
    const post = new Post()
    post.title = data.title
    post.content = data.content
    post.userId = user.id

    const fileService = new FileService()
    const file = await fileService.create(data.cover)

    post.coverId = file.id

    await post.save()

    return post
  }
}
