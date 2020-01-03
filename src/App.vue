<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader /> <!-- 给todoheader标签对象绑定addItem事件监听-->
      <TodoList />
      <TodoFooter />
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'

export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('getTodos')
  },
  components:{
    TodoHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
