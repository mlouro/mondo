/*
 * Site views
 */
exports.index = function (req, res) {
    console.log('index');
    res.render('index', 'site index');
};

exports.contact = function (req, res) {
    console.log('contact');
    res.render('index', 'site index');
};
