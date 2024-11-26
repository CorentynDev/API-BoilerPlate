const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Un nom est requis'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Example', exampleSchema);
