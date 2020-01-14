/*jshint esversion: 6 */
const userRoutes = (app, fs) => {

    // variables
    const dataPath = './data/test-data.json';

    // READ
    app.get('/users', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = userRoutes;