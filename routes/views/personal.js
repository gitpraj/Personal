var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'personal';

  //Load Products
  view.query('personals', keystone.list('Personal').model.find());

  // Render View
  view.render('personal');
}
