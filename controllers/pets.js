import { Pet } from "../models/pet.js"

function index(req, res) {
  // console.log("PETS CONSOLE LOG")
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
  req.body.myPatient = req.user.profile._id
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
  Pet.findById(req.params.id)
  .populate("myPatient")
  .then(pet => {
    res.render('pets/show', {
      pet,
      title: "show pet",
    })
  })
  .catch(err => {
    res.redirect('/pets')
  })
}

function edit(req, res) {
  Pet.findById(req.params.id, function (error, pet) {
    res.render("pets/show", {
      pet,
      error,
      title: "Edit Pet"
    })
  })
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
  Pet.findByIdAndUpdate(req.params.id, req.body, function(error, pet) {
    res.redirect('/pets/:id')
  })
}

export {
  newPet as new,
  index,
  create,
  show,
  edit,
  update,
}