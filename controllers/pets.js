import { Pet } from '../models/pets.js'

function index(req, res) {
  console.log("PETS")
  Pet.find({})
  .then(pets => {
    res.render('/pets', {
      pets,
      title: pets,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/pets")
  })
}

export {
  index
}