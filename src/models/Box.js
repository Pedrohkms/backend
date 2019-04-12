const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: 1,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }]
},{
    timestamps: true
});

module.exports = mongoose.model('Box', Box);