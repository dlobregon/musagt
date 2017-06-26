var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var eventSchema   = new Schema({
    idMuseo:Number,
    nombre: String,
    imagen: String,
    fecha: String,
    descripcion: String
});

module.exports = mongoose.model('event',eventSchema);
