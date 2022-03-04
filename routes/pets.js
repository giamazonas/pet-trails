import { Router } from 'express'
import * as petsCtrl from '../controllers/pets.js'

const router = Router()

router.get('/pets', petsCtrl.index)


export {
  router
}