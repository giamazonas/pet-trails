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

export {
  index,
}