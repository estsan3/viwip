const express = require('express');
const router = express.Router();

// Device Model
const Device = require('../models/device');

// GET all devices
router.get('/', async (req, res) => {
  const devices = await Device.find();
  res.json(devices);
});

// GET Device
router.get('/:id', async (req, res) => {
  const device = await Device.findById(req.params.id);
  res.json(device);
});

// ADD a new device
router.post('/add', async (req, res) => {
  console.log('requesttttt!--'+ req)
  /*const device = new Device({
    usuario:'Usuario1',
    name:req.body.name,
    mac:'00-01-00-01-23-9C-42-1E-D0-94-66-EA-88-9C',
    habilitado:true  
  });*/
  const device = new Device(req.body);
  await device.save();
  res.json(device => {
    console.log('Device Saved')
    res.json(device)})  
});

// UPDATE a new device
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newDevice = {title, description};
  await Device.findByIdAndUpdate(req.params.id, newDevice);
  res.json({status: 'Device Updated'});
});

router.delete('/:id', async (req, res) => {
  await Device.findByIdAndRemove(req.params.id);
  res.json({status: 'Device Deleted'});
});

module.exports = router;
