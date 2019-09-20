const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    StudentID:Number,
    SudentName: String,
    Class: String,
    Address:String,
    Hostel:Boolean

}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);