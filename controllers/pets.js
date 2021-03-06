import { Pets } from "../models/pet.js";

function index(req, res) {
  console.log("SEARCH", req.query);
  const error = req.query.error;
  if (req.query.id) {
    console.log("HITTING IF CONDITION");
    Pets.findById(req.query.id)
      .populate("myPatient")
      .then((pet) => {
        if (pet) {
          res.render("pets/show", {
            pet,
            title: "Pets",
            error,
          });
        } else {
          res.redirect("/pets?error=true");
        }
      });
  } else {
    Pets.find({}).then((pets) => {
      res.render("pets", {
        pets,
        title: "Pets",
        error,
      });
    });
  }
}

function create(req, res) {
  req.body.owner = req.user.profile._id;
  if (req.body.myPatient === "true") {
    req.body.myPatient = [req.user.profile._id];
  } else {
    req.body.myPatient = [];
  }
  Pets.create(req.body)
    .then((pet) => {
      pet.save(function (error) {
        console.log("PET", pet);
        res.redirect(`/pets/${pet._id}`);
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pets/new");
    }),
    console.log("CREATE FUNCT", create);
}

function newPet(req, res) {
  res.render("pets/new", {
    title: "Add Pet",
  }),
    console.log("NEWPET", newPet);
}

function show(req, res) {
  console.log("show pet function");
  Pets.findById(req.params.id)
    .populate("myPatient")
    .then((pet) => {
      res.render("pets/show", {
        pet,
        title: "show pet",
      });
    })
    .catch((err) => {
      res.redirect("/new");
    });
}

function edit(req, res) {
  Pets.findById(req.params.id)
    .populate("myPatient")
    .then((pet) => {
      if (!pet.myPatient.some((p) => p._id.equals(req.user.profile._id))) {
        res.redirect("/pets");
      } else {
        res.render("pets/edit", {
          pet,
          title: "edit",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pets");
    });
}

function update(req, res) {
  console.log("TEST UPDATE", req.params.id);
  Pets.findById(req.params.id)
    .then((pet) => {
      console.log("LOOK PET", pet.owner);
      console.log("NEW INFO", req.body);
      pet.updateOne(req.body, { new: true }).then(() => {
        res.redirect(`/pets/${req.params.id}`);
        console.log("LINE 67", req.params.id);
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/pets`);
    });
}

function deletePet(req, res) {
  Pets.findById(req.params.id)
    .then((pet) => {
      console.log("PETTTTT", pet);
      pet.delete().then(() => {
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pets");
    });
}

function createComments(req, res) {
  console.log("CREATECOMMS");
  Pets.findById(req.params.id, function (err, pet) {
    pet.comments.push(req.body);
    pet.save(function (err) {
      res.redirect(`/pets/${pet._id}`);
    });
  });
}

export {
  createComments,
  newPet as new,
  index,
  create,
  show,
  edit,
  update,
  deletePet as delete,
};
