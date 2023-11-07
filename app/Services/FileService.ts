import Application from '@ioc:Adonis/Core/Application'
import File from 'App/Models/File'

export default class FileService {
  constructor() {}

  public async create(data: any) {
    await data.move(Application.tmpPath('uploads'))

    const file = new File()
    file.fileName = data.fileName

    await file.save()

    return file
  }
}
