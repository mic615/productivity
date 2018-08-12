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
exports.task_get_by_name = function (req, res) {
    Task.find({name: req.params.name}, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_get_by_category = function (req, res) {
    Task.find({category: req.params.category}, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_get_by_assigned = function (req, res) {
    Task.find({assigned: req.params.assigned}, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_get_by_completed = function (req, res) {
    Task.find({completed: req.params.completed}, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, category: req.body.category }},
    function (err, task) {
        if (err) return next(err);
        res.send('task updated');
    });
};
exports.task_update_assigned = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, { $set: { assigned: req.body.assigned, startDate: req.body.startDate }},
    function (err, task) {
        if (err) return next(err);
        res.send('assigned updated');
    });
};
exports.task_update_completed = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, { $set: { completed: req.body.completed , startDate: req.body.endDate }},
    function (err, task) {
        if (err) return next(err);
        res.send('completed updated');
    });
};
