import { Pets } from "../models/pet.js"

function index(req, res) {
  Pets.find({})
  .then(pets => {
    res.render('pets', {
      pets,
      title: "Pets",
    })
  })
}

function create(req, res) {
  req.body.owner=req.user.profile._id
  Pets.create(req.body)
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
  Pets.findById(req.params.id)
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
  Pets.findById(req.params.id)
  .then(pet => {
    res.render('pets/edit', {
      pet,
      title: "edit",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/pets')
  })
}

function update(req, res) {
  console.log('TEST UPDATE',req.params.id)
  Pets.findById(req.params.id)
  .then(pet => {
    console.log('LOOK PET', pet.owner)
    console.log('NEW INFO', req.body)
    pet.updateOne(req.body, {new: true})
    .then(() => {
      res.redirect(`/pets/${req.params.id}`)
      console.log('LINE 67', req.params.id)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/pets`)
  })
}

function newPet(req, res) {
  res.render('pets/new', {
    title: "Add Pet",
  })
}

function search(req, res) {
  Pets.query.findById 
  res.redirect('/:id')
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