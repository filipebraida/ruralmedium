import User from 'App/Models/User'
import Post from 'App/Models/Post'

import FileService from 'App/Services/FileService'

export default class UsersController {
  private fileService: FileService

  constructor() {
    this.fileService = new FileService()
  }

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

    const file = await this.fileService.create(data.cover)

    post.coverId = file.id

    await post.save()

    return post
  }
}
