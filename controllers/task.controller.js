const Task = require('../models/task.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.task_create = function (req, res) {
    let task = new Task(
        {
          name: req.body.name,
          category: req.body.category,
          createdDate:req.body.createdDate,
        startDate:req.body.startDate,
          endDate:req.body.endDate,
          assigned:req.body.assigned,
          completed:req.body.completed
        }
    );

    task.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Task Created successfully')
    })
};
exports.task_details = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};
