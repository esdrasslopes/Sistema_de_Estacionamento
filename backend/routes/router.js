const router = require("express").Router();

const park = require("./park");

const user = require("./user");

router.use("/", park);

router.use("/", user);

module.exports = router;
