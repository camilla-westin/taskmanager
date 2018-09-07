import Api from '@/services/Api'

export default {
  fetchTasks () {
    return Api().get('tasks')
  },
  addTask (params) {
    return Api().post('tasks', params)
  },
  updateTask (params) {
    return Api().put('tasks/' + params.id, params)
  },
  getTasks (params) {
    return Api().get('tasks/' + params.id)
  },
  deleteTask (id) {
    return Api().delete('tasks/' + id)
  }
}
