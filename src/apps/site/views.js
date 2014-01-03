/*
 * Site views
 */
exports.index = function (req, res) {
    console.log('index');
    res.render('index', 'site index');
};
