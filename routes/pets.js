import { Router } from 'express'
// import { is } from 'express/lib/request'
import * as petsCtrl from '../controllers/pets.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

// GET localhost:3000/pets
router.get('/', petsCtrl.index)
// GET localhost:3000/pets/new
router.get('/new', isLoggedIn, petsCtrl.new)

// POST localhost:3000/pets/new
router.post('/new', isLoggedIn, petsCtrl.create)
// GET localhost:3000/pets/:id
//  should this be under profile as well?
router.get('/:id', isLoggedIn, petsCtrl.show)
//PATCH localhost:3000/pets/:id
router.get('/:id/edit', isLoggedIn, petsCtrl.edit)
router.put('/:id', isLoggedIn, petsCtrl.update)

console.log("PETS ROUTER")

export {
  router
}