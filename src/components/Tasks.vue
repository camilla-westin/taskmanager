<template>
  <div class="tasks">
    <h1>Simple task manager</h1>
    <div v-if="tasks.length > 0" class="tasks-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewTask' }" class="btn">Add task <span class="add-icon"></span></router-link>
      </div>
      <!-- <div class="sort-container">
        <select v-on:change="filterType">
          <option value="">Sort by type</option>
          <option v-for="task in tasks" :key="task.type">{{ task.type }}</option>
        </select>
      </div> -->
      <ul class="task-list">
        <li class="task-item" v-for="task in tasks" :key="task">
          <div class="task-item-head">
            <span class="task-type"> {{ task.type }}</span>
            <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">
              <span class="edit-icon"></span>
            </router-link>
          </div>
          <div class="task-item-content">
            <h2 class="task-name">{{ task.title }}</h2>
            <p class="task-description">{{ task.description }}</p>
          </div>
            <a href="#" @click="deleteTask(task._id)" class="delete-task"><span class="delete-icon"></span></a>
        </li>
      </ul>
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
      tasks: []
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
