const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeviceSchema = new Schema({
  id: { type: String},
  usuario: { type: String},
  nombre: { type: String},
  mac: { type: String},
  habilitado: { type: Boolean },
  assets: [{ id: String,
             name: String,
             uri:String,
             active: { type: Boolean, default: true },
             deleted: {type: Boolean, default: true }
            }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Device', DeviceSchema);
/*
const AssetSchema = new Schema({
  id: { type: String},
  usuario: { type: String},
  nombre: { type: String},
  url: { type: String},
  habilitado: { type: Boolean },
  devices: [],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Asset', AssetSchema);*/