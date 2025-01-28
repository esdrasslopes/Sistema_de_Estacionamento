const router = require("express").Router();

const parkController = require("../controllers/parkController");

router.route("/park").post((req, res) => parkController.create(req, res));

router.route("/park").get((req, res) => parkController.getAll(req, res));

router.route("/park/:id").get((req, res) => parkController.getOne(req, res));

router.route("/park/:id").delete((req, res) => parkController.delete(req, res));

router.route("/park/:id").put((req, res) => parkController.update(req, res));

module.exports = router;
