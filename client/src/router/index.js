import Vue from 'vue'
const express = require('express');

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tasks from '@/components/Tasks'
import NewTask from '@/components/NewTask'
import EditTask from '@/components/EditTask'

export default new Router({
  mode: 'history', // stops weird # in url
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/tasks/new',
      name: 'NewTask',
      component: NewTask
    },
    {
      path: '/tasks/:id',
      name: 'EditTask',
      component: EditTask
    }
  ]
})
