import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '@/components/Tasks'
import NewTask from '@/components/NewTask'
import EditTask from '@/components/EditTask'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/tasks/new',
      name: 'NewTask',
      component: NewTask
    },
    {
      path: '/tasks/edit/:id',
      name: 'EditTask',
      component: EditTask
    },
    {
      path: '/tasks/task/:id',
      name: 'Task',
      component: Task
    }
  ]
})
