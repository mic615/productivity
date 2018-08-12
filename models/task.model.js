const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    name: String,
    category: String,
    createdDate: { type: Date, default: Date.now },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },
    assigned: { type: Boolean, default: false},
    completed: { type: Boolean, default: false}

});


// Export the model
module.exports = mongoose.model('Task', TaskSchema);
