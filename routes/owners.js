import { Router } from 'express'
import * as ownersCtrl from '../controllers/owners.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

//GET localhost:3000/owners
router.get('/', ownersCtrl.index)

console.log("OWNERS ROUTER")

export {
  router
}