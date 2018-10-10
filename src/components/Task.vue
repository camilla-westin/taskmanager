<template>
  <div class="tasks">
    <div class="task">
    <h2>{{ this.title }}</h2>
    <div class="task-status">{{ this.status }}</div>
    <div class="task-description">{{ this.description }}</div>
    </div>
  </div>
</template>
<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'Task',
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
    }
  }
}
</script>
