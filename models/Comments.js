var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var commentSchema   = new Schema({
    idMuseo:Number,
    calificacion: Number,
    comentario: String,
    fecha: String
});

module.exports = mongoose.model('comment',commentSchema);
