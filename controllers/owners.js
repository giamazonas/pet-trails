import { Owners } from "../models/owner.js"

function index(req, res) {
  console.log('hello', index)
  Owners.find({})
  .then(owner => {
    res.render('owners', {
      owner,
      title: "Owner"
    })
  })
  
}

export {
  index,
}