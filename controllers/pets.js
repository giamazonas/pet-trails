
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
  console.log('OWNER', req.user)
  console.log('PETS', req.body)
  // req.body.myPatient = req.user.profile._id
  // req.body.myPatient = !!req.body.myPatient 
  Pet.create(req.body)
  .then(pet => {
    pet.save(function(error){
      console.log('PET', pet)
      res.redirect(`/pets/${pet._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/pets/new')
  })
}

function show(req, res) {
  console.log('show pet function')
  Pet.findById(req.params.id)
  .populate("myPatient")
  .then(pet => {
    res.render('pets/show', {
      pet,
      title: "show pet",
    })
  })
  .catch(err => {
    res.redirect('/new')
  })
}

function edit(req, res) {
  console.log('TEST EDIT')
  Pet.findById(req.params.id, function (error, pet) {
    res.render("pets/edit", {
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
      pet.update(req.body, {new: true})
      .then(() => {
        res.redirect(`/pets/${req.params.id}`)
      })
    } 
    // {
    //   if (pet.myPatient.equals(req.user.profile._id)) 
    //   else {
    //   throw new Error("NOT AUTHORIZED")
    // }
  )
  Pet.findByIdAndUpdate(req.params.id, req.body, function(error, pet) {
    res.redirect('/pets/:id')
  })
}

function newPet(req, res) {
  res.render('pets/new', {
    title: "Add Pet",
  })
}

function search(req, res) {
  db.pets.createIndex({ title: "microchip"})
  res.redirect('/pets/:id')
}

export {
  newPet as new,
  index,
  create,
  show,
  edit,
  update,
  search,
}