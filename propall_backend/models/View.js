// backend/models/View.js
const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
  position: { type: [Number], required: true },
  rotation: { type: [Number], required: true },
  quaternion: { type: [Number], required: true },
});

const View = mongoose.model('View', viewSchema);

module.exports = View;
