import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
// import * as profileCtrl from '../controllers/profiles.js'
import { Pets } from "../models/pet.js"


const router = Router()

router.get('/', function (req, res) {
  Pets.find({})
  .then(pets => {
    res.render('index', { 
      title: 'Home Page', 
      pets,
      user: req.user ? req.user : null
    })
  })
}, isLoggedIn)



export {
  router
}
