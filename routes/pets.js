import { Router } from 'express'
import * as petsCtrl from '../controllers/pets.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

// GET localhost:3000/pets
router.get('/', petsCtrl.index)
// GET localhost:3000/pets/new
router.get('/pets/new', isLoggedIn, petsCtrl.new)
// GET localhost:3000/pets/:id
router.get('/pets/:id', petsCtrl.show)

// POST localhost:3000/pets/new
router.post('/pets/new', isLoggedIn, petsCtrl.create)

//PATCH localhost:3000/pets/:id
router.patch('/pets/:id', petsCtrl.update)


console.log("PETS ROUTER")

export {
  router
}