const router = require("express").Router();

const userController = require("../controllers/userController");

router.route("/user").post((req, res) => userController.create(req, res));

router.route("/user").get((req, res) => userController.getAll(req, res));

router.route("/user/:id").get((req, res) => userController.getOne(req, res));

router.route("/user/:id").delete((req, res) => userController.delete(req, res));

router.route("/user/:id").put((req, res) => userController.update(req, res));

module.exports = router;
