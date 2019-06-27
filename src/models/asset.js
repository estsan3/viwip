const mongoose = require('mongoose');
const { Schema } = mongoose;

const AssetSchema = new Schema({
  id: { type: String},
  usuario: { type: String},
  nombre: { type: String},
  url: { type: String},
  habilitado: { type: Boolean },
  devices: [{
    key: { type: String}
  }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Asset', AssetSchema);