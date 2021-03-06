const mongoose = require('mongoose');
// Setup mongoose to use promises
mongoose.Promise = global.Promise;
// Plug Heroku (mLab) addon or local database
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};