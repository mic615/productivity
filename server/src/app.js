const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();
var Task = require("../models/task");
// Fetch all tasks
app.get('/tasks', (req, res) => {
  Task.find({}, 'title category description', function (error, tasks) {
    if (error) { console.error(error); }
    console.log(tasks);
    res.send({
      tasks: tasks
    })
  }).sort({_id:-1})
})

// Add new task
app.post('/tasks', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var category = req.body.category;
  var new_task = new Task({
    title: title,
    category: category,
    description: description
  })
  console.log(new_task)
  new_task.save(function (error) {
    if (error) {
      console.log(error)
    }
    console.log(res)
    res.send({
      success: true,
      message: 'Task saved successfully!'
    })
  })
})
// Fetch single task
app.get('/task/:id', (req, res) => {
  var db = req.db;
  Task.findById(req.params.id, 'title category description', function (error, task) {
    if (error) { console.error(error); }
    res.send(task)
  })
})

// Update a task
app.put('/tasks/:id', (req, res) => {
  var db = req.db;
  Task.findById(req.params.id, 'title category description', function (error, task) {
    if (error) { console.error(error); }

    task.title = req.body.title
    task.description = req.body.description
    task.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})
// Delete a task
app.delete('/tasks/:id', (req, res) => {
  var db = req.db;
  Task.remove({
    _id: req.params.id
  }, function(err, task){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

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
app.listen(process.env.PORT || 8081)
