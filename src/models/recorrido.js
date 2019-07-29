const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecorridoSchema = Schema({
  horario: Date,
  origen: String,
  destino: String
});


module.exports = mongoose.model('recorridos', RecorridoSchema);
