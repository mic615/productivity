<template>
  <div class="tasks">
    <h1>Add Task</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input type="text" name="category" placeholder="CATEGORY" v-model="category">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_task_btn" @click="addTask">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'NewTask',
  data () {
    return {
      title: '',
      category: '',
      description: ''
    }
  },
  methods: {
    async addTask () {
      console.log(this.category)
      await TasksService.addTask({
        title: this.title,
        category: this.category,
        description: this.description
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
.app_task_btn {
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
