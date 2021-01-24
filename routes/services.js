const servicesController = require("../controllers/servicesController");

module.exports = function(app) {

	app.get("/api/services", servicesController.getServices);
};