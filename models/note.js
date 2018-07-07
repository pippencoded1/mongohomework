var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema ({
    _headlineId: {
        type: Schema.Types.ObjectId,
        //associated article to attach the note too
        ref:"Headline"
    },
    date: String,
    noteText: String
})

var Note= mongoose.model("Note", noteSchema);

module.export = Note;