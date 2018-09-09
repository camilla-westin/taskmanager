<template>
  <div class="tasks">
    <h1>Edit task</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <select v-model="type" id="type">
          <option value="">Choose type</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Editorial">Editorial</option>
          <option value="Research">Research</option>
        </select>
        <select v-model="status" id="status">
          <option value="">Choose status</option>
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>
          <option value="Ready for test">Ready for test</option>
          <option value="Ready for deploy">Ready for deploy</option>
          <option value="Done">Done</option>
        </select>
        <div>
          <button class="app_post_btn" @click="updateTask">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'EditTask',
  data () {
    return {
      title: '',
      description: '',
      type: '',
      status: ''
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      const response = await TasksService.getTasks({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
      this.type = response.data.type
      this.status = response.data.status
    },
    async updateTask () {
      await TasksService.updateTask({
        id: this.$route.params.id,
        title: this.title,
        description: this.description,
        type: this.type,
        status: this.status
      })
      this.$router.push({ name: 'Tasks' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
