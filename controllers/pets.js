import { Pet } from "../models/pet.js"

function index(req, res) {
  console.log("PETS CONSOLE LOG")
  Pet.find({})
  .then(pets => {
    res.render('pets', {
      pets,
      title: "Pets",
    })
  })
  // console.log(`PETS HERE`)
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
  // .catch(err => {
  //   console.log(err)
  //   res.redirect('/pets')
  // })
}

function newPet(req, res) {
  res.render('pets/new', {
    title: "Add Pet",
  })
}

function show(req, res) {
  // Pet.findById
  console.log('test', show)
}

function update(req, res) {
  console.log(req.params.id)
  Pet.findById(req.params.id)
  .then(pet => {
    if (pet.myPatient.equals(req.user.profile._id)) {
      pet.update()
      .then(() => {
        res.redirect(`/pets/${req.params.id}`)
      })
    } else {
      throw new Error("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("the error:", err)
    res.redirect("/tacos")
  })
}

export {
  index,
  create,
  newPet as new,
  show,
  update,
}