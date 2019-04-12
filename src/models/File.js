const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: 1,
    },
    path: {
        type: String,
        required: 1
    },    
},{
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

File.virtual('url').get(function() {
    return `http://localhost:6969/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model('File', File);