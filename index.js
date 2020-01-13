/*jshint esversion: 6 */
// content of index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// var router = express.Router();

var routes = require('./generateCSV'); //importing route
// routes(app); //register the route


// testDataRoutes Routes
// router.get('/generateData', function (req, res) {
// routes.generateData();
// });

// app.use(express.static('.'));

// module.exports = router;


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/generateData', (req, res) => {
  routes.generateData(); res.send('Generating CSV file using input data successfully completed.')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('RESTful API server started on: ' + port);