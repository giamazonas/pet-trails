import { Router } from "express";
import * as petsCtrl from "../controllers/pets.js";
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router();

// GET localhost:3000/pets
router.get("/", isLoggedIn, petsCtrl.index);
// GET localhost:3000/pets/new
router.get("/new", isLoggedIn, petsCtrl.new);

// POST localhost:3000/pets/new
router.post("/new", isLoggedIn, petsCtrl.create);
// GET localhost:3000/pets/:id
router.get("/:id", isLoggedIn, petsCtrl.show);
//PATCH localhost:3000/pets/:id
router.get("/:id/edit", isLoggedIn, petsCtrl.edit);
router.patch("/:id", isLoggedIn, petsCtrl.update);
router.delete("/:id", isLoggedIn, petsCtrl.delete);

//POSt localhost:3000/pets/:id/comments
router.post("/:id/comments", isLoggedIn, petsCtrl.createComments);

export { router };
