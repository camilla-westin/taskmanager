<template>
  <div class="tasks">
    <h1>tasks</h1>
    <div v-if="tasks.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewTask' }" class="">Add task</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="task in tasks" :key="task._id">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">Edit</router-link> |
            <a href="#" @click="deleteTask(task._id)">Delete</a>
          </td>
        </tr>
      </table>
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
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
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
