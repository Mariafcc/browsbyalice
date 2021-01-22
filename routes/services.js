const servicesController = require("../controllers/servicesController");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
		);
		next();
	});

	app.get("/api/services", servicesController.getServices);
};