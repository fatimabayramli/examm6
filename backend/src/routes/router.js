const express = require("express")
const router = express.Router()
const controllers = require("../controllers/FoodController")

router.get("/foods", controllers.getAllFoods)
router.post("/foods", controllers.postFood)
router.get("/foods/:id", controllers.getFood)
router.patch("/foods/:id", controllers.patchFood)
router.delete("/foods/:id", controllers.deleteFood)

module.exports = router