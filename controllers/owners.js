import { Owners } from "../models/owner.js"

function index(req, res) {
  console.log('hello', index)
  Owners.find({})
  .then(owners => {
    res.render('owners', {
      owners,
      title: "Owners"
    })
  })
}

function create(req, res) {
  console.log('OWNER create function', req.user)
  Owners.create(req.body)
  .then(info => {
    info.save(function(error) {
      console.log('Owner Info', info)
      res.redirect(`/pets/${pet._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/pets/new')
  })
}

export {
  index,
  create,
  
}