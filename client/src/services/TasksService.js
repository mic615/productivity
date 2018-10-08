import Api from '@/services/Api'

export default {
  fetchTasks () {
    return Api().get('tasks')
  },
  addTask (params) {
    return Api().task('tasks', params)
  },
  updateTask (params) {
    return Api().put('tasks/' + params.id, params)
  },

  getTask (params) {
    return Api().get('task/' + params.id)
  },

  deleteTask (id) {
    return Api().delete('tasks/' + id)
  }

}
