import { Router } from 'express'
import * as ownersCtrl from '../controllers/owners.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

export {
  router
}