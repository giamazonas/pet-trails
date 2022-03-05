import { Pet } from "../models/pet.js"

function index(req, res) {
  console.log("PETS CONSOLE LOG")
  Pet.find({})
  .then(pets => {
    res.render('pets', {
      pets,
      title: pets,
    })
  }), console.log(`PETS HERE`)
  // .catch(err => {
  //   console.log(err)
  //   res.redirect('/')
  // })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Pet.create(req.body)
  .then(pet => {
    res.redirect('/pets/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/pets')
  })
}


export {
  index,
  create,

}