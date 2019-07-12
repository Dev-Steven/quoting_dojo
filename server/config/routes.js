const quotes = require('./../controllers/quotes');

module.exports = function(app) {

    app.get('/', function(req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        quotes.index(req, res);
    })
    // Add User Request 
    app.post('/quotes', function(req, res) {
        quotes.get_data(req, res);
    })

    app.get('/quotes', function(req, res) {
        quotes.display_quote(req, res);
    })
}