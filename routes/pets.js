import { Router } from 'express'
import * as petsCtrl from '../controllers/pets.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

// GET localhost:3000/pets
router.get('/', petsCtrl.index)
// GET localhost:3000/pets/new
router.get('/new', isLoggedIn, petsCtrl.new)

router.put('/edit', petsCtrl.update)
// POST localhost:3000/pets/new
router.post('/new', isLoggedIn, petsCtrl.create)
// GET localhost:3000/pets/:id
//  should this be under profile as well?
router.get('/:id', petsCtrl.show)
//PATCH localhost:3000/pets/:id
router.get('/:id/edit', isLoggedIn, petsCtrl.edit)


console.log("PETS ROUTER")

export {
  router
}