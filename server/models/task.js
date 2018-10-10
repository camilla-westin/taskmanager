var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  description: String,
  type: String,
  status: String
});

var Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
