const express = require('express');
const router = express.Router();

// Device Model
const Asset = require('../models/asset');

// GET all assets
router.get('/', async (req, res) => {
  const assets = await Asset.find();
  res.json(assets);
});

// GET Asset
router.get('/:id', async (req, res) => {
  const asset = await Asset.findById(req.params.id);
  res.json(asset);
});

// ADD a new Asset
router.post('/add', async (req, res) => {
  console.log('requesttttt!--'+ req)
  const asset = new Asset(req.body);
  await asset.save();
  res.json(asset => {
    console.log('asset Saved')
    res.json(asset)})  
});

// UPDATE a new device
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newDevice = {title, description};
  await Device.findByIdAndUpdate(req.params.id, newDevice);
  res.json({status: 'Device Updated'});
});

router.delete('/:id', async (req, res) => {
  await Asset.findByIdAndRemove(req.params.id);
  res.json({status: 'Asset Deleted'});
});

module.exports = router;
