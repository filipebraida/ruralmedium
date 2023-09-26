/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/posts', 'PostsController.index')
Route.get('/posts/:id', 'PostsController.show') 
Route.delete('/posts/:id', 'PostsController.destroy')
Route.patch('/posts/:id', 'PostsController.update')
Route.post('/posts', 'PostsController.store').as('posts.store')

Route.get('/users', 'UsersController.index')
Route.get('/users/:id', 'UsersController.show') 
Route.delete('/users/:id', 'UsersController.destroy')
Route.patch('/users/:id', 'UsersController.update')
Route.post('/users', 'UsersController.store').as('users.store')
