var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  category: String,
  description: String,
  createdDate: { type: Date, default: Date.now },
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  assigned: { type: Boolean, default: false},
  completed: { type: Boolean, default: false}

});

var Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
