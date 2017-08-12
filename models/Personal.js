var keystone = require('keystone');
var Types = keystone.Field.Types;

var Personal = new keystone.List('Personal', {
  map: {name: 'title'},
  autokey: {path: 'slug', from: 'title', unique: true}
})

Personal.add({
  title: {type: String, required: true},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  image: {type: Types.CloudinaryImage}
})

Personal.register();
