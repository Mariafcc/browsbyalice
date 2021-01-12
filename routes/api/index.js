const router = require("express").Router();
const serviceRoutes = require("./services");


router.use("/services", serviceRoutes);

module.exports = router;
