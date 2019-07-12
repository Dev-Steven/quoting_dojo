const mongoose = require('mongoose'), 
Quote = mongoose.model('Quote')

module.exports = {
    index: function(req, res) {
        res.render('index');
    },

    get_data: function(req, res) {
        console.log("POST DATA", req.body);
        // This is where we would add the user from req.body to the database.
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err) {
            if(err) {
                console.log('something went wrong');
    
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                console.log('successfully added a quote');
                res.redirect('/quotes');
            }
        });
    },

    display_quote: function(req, res) {
        Quote.find({}, function(err, quotes) {
            res.render('quotes', {all_quotes: quotes});
        });
    }
};