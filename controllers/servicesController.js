const db = require("../models");
const Op = db.Sequelize.Op;
const Service = db.service;

exports.getServices = (req, res) => {
    Service.findAll({
        attributes: ['id', 'name', 'description', 'price', 'time']
    })
        .then(services => {
            res.status(200).send({
                services
            });
        })
        // .catch(err => {
        //     res.status(500).send({ message: err.message });
        // });
};
