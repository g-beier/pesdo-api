const { Router } = require("express");
const ExercicesController = require("./controllers/ExerciceController");

const router = Router();

router.get("/v1/exercices", ExercicesController.index);
router.get("/v1/exercices/:id", ExercicesController.show);
router.post("/v1/exercices", ExercicesController.store);
router.put("/v1/exercices/:id", ExercicesController.update);
router.delete("/v1/exercices/:id", ExercicesController.delete);

module.exports = router;
