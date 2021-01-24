const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

//run initially
const seeds = require("./seeds");
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    seeds.serviceSeed();
});

//comment out initially
// db.sequelize.sync();

require('./routes/services')(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
