const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
  res.sendFile(path.resolve('views/sharks.html'));
};
