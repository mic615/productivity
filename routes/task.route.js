const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const task_controller = require('../controllers/task.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', task_controller.test);
router.get('/:id', task_controller.task_details);
router.get('/name/:name', task_controller.task_get_by_name);
router.get('/category/:category', task_controller.task_get_by_category);
router.get('/assigned/:assigned', task_controller.task_get_by_assigned);
router.get('/completed/:completed', task_controller.task_get_by_completed);
router.post('/create', task_controller.task_create);
router.put('/:id/update',  task_controller.task_update);
router.put('/:id/update/assigned',  task_controller.task_update_assigned);
router.put('/:id/update/completed',  task_controller.task_update_completed);

module.exports = router;
