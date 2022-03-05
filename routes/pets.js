import { Router } from 'express'
import * as petsCtrl from '../controllers/pets.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', petsCtrl.index)
router.post('/pets/new', isLoggedIn, petsCtrl.create)
// router.get('/pets', petsCtrl.show)

console.log("PETS ROUTER")

export {
  router
}