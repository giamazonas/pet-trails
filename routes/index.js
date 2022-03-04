import { Router } from 'express'
// import * as profileCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})

export {
  router
}
