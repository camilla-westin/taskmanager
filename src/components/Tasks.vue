<template>
  <div class="tasks">
    <img class="logo" src="../assets/logo.png">
    <h1>Simple task manager</h1>
    <div v-if="tasks.length > 0" class="tasks-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewTask' }" class="btn">Add task <span class="add-icon"></span></router-link>
      </div>
      <div class="sort-container">
        <label for="sort">Sort by:</label>
        <select v-on:change="filterType">
          <option value="">All</option>
          <option v-for="task in uniqueItemsList" :key="task.type">{{ task }}</option>
        </select>
      </div>
      <div class="board">
        <div class="todo-column board-column">
          <h2>To do</h2>
          <ul class="task-list">
            <li v-show="type === '' || type === task.type"
              v-if="task.status === 'To do'"
              v-bind:class="[ task.type ]"
              class="task-item"
              v-for="task in tasks"
              :key="task.index">
            <div class="task-item-head">
              <span class="task-type"> {{ task.type }}</span>
              <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">
                <span class="edit-icon"></span>
              </router-link>
              <a href="#" @click="deleteTask(task._id)" class="delete-task"><span class="delete-icon"></span></a>
            </div>
            <div class="task-item-content">
              <h2 class="task-name">{{ task.title }}</h2>
              <span class="task-status">Status: {{ task.status }}</span>
              <router-link v-bind:to="{ name: 'Task', params: { id: task._id } }">More info</router-link>
            </div>
          </li>
          </ul>
        </div>
        <div class="inprogress-column board-column">
          <h2>In progress</h2>
          <ul class="task-list">
            <li v-show="type === '' || type === task.type"
              v-if="task.status === 'In progress'"
              v-bind:class="[ task.type ]"
              class="task-item"
              v-for="task in tasks"
              :key="task.index">
            <div class="task-item-head">
              <span class="task-type"> {{ task.type }}</span>
              <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">
                <span class="edit-icon"></span>
              </router-link>
            </div>
            <div class="task-item-content">
              <h2 class="task-name">{{ task.title }}</h2>
              <p class="task-description">{{ task.description }}</p>
              <span class="task-status">Status: {{ task.status }}</span>
            </div>
              <a href="#" @click="deleteTask(task._id)" class="delete-task"><span class="delete-icon"></span></a>
          </li>
          </ul>
        </div>
        <div class="test-column board-column">
          <h2>Test</h2>
          <ul class="task-list">
            <li v-show="type === '' || type === task.type"
              v-if="task.status === 'Ready for test'"
              v-bind:class="[ task.type ]"
              class="task-item"
              v-for="task in tasks"
              :key="task.index">
            <div class="task-item-head">
              <span class="task-type"> {{ task.type }}</span>
              <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">
                <span class="edit-icon"></span>
              </router-link>
            </div>
            <div class="task-item-content">
              <h2 class="task-name">{{ task.title }}</h2>
              <p class="task-description">{{ task.description }}</p>
              <span class="task-status">Status: {{ task.status }}</span>
            </div>
              <a href="#" @click="deleteTask(task._id)" class="delete-task"><span class="delete-icon"></span></a>
          </li>
          </ul>
        </div>
        <div class="readydeploy-column board-column">
          <h2>Ready for deploy</h2>
          <ul class="task-list">
            <li v-if="task.status === 'Ready for deploy'" v-show="type === '' || type === task.type" v-bind:class="[ task.type ]" class="task-item" v-for="task in tasks" :key="task.index">
              <div class="task-item-head">
                <span class="task-type"> {{ task.type }}</span>
                <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">
                  <span class="edit-icon"></span>
                </router-link>
              </div>
              <div class="task-item-content">
                <h2 class="task-name">{{ task.title }}</h2>
                <p class="task-description">{{ task.description }}</p>
                <span class="task-status">Status: {{ task.status }}</span>
              </div>
                <a href="#" @click="deleteTask(task._id)" class="delete-task"><span class="delete-icon"></span></a>
            </li>
          </ul>
        </div>
        <div class="done-column board-column">
          <h2>Done</h2>
          <ul class="task-list">
            <li v-if="task.status === 'Done'" v-show="type === '' || type === task.type" v-bind:class="[ task.type ]" class="task-item" v-for="task in tasks" :key="task.index">
              <div class="task-item-head">
                <span class="task-type"> {{ task.type }}</span>
                <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">
                  <span class="edit-icon"></span>
                </router-link>
              </div>
              <div class="task-item-content">
                <h2 class="task-name">{{ task.title }}</h2>
                <p class="task-description">{{ task.description }}</p>
                <span class="task-status">Status: {{ task.status }}</span>
              </div>
                <a href="#" @click="deleteTask(task._id)" class="delete-task"><span class="delete-icon"></span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      There are no tasks.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewTask' }" class="add_task_link">Add task</router-link>
    </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'tasks',
  data () {
    return {
      tasks: [],
      type: ''
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      const response = await TasksService.fetchTasks()
      this.tasks = response.data.tasks
    },
    async deleteTask (id) {
      await TasksService.deleteTask(id)
      this.getTasks()
      this.$router.push({ name: 'Tasks' })
    },
    async filterType () {
      this.type = event.target.value
    }
  },
  computed: {
    uniqueItemsList: function () {
      const types = []
      this.tasks.forEach(task => {
        if (!types.includes(task.type)) {
          types.push(task.type)
        }
      })
      return types
    }
  }
}
</script>
<style type="text/css">

a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
