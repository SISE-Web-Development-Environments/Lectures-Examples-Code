<template>
  <div>
    <button v-on:click="comp()">click</button>
    {{comp}}
    <!-- <div class="grid-container">
      <div class="grid-item">
        <todoList :initialTasks="initial_tasks" bgColor="background-color:yellow"></todoList>
        <todoList :initialTasks="initial_tasks2" bgColor="background-color:red"></todoList>
        <todoList :initialTasks="initial_tasks3" bgColor="background-color:blue"></todoList>
      </div>
      <div class="grid-item" style="  text-align: center">
        <img id="meme" src="./assets/meme.jpg" />
      </div>
    </div>-->
  </div>
</template>

<script>
import todoList from "./components/shared/todoList/todoList";



export default {
  name: "app",
  components: { todoList: todoList },
  computed: {
    comp() {
      return "hello";
    }
  },
  data() {
    return {
      initial_tasks: ["Design Flow", "Choose Frameworks"],
      initial_tasks2: ["Milk", "cheese"],
      initial_tasks3: ["water", "gas"]
    };
  }
};
</script>

<style>
#meme {
  height: 200px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
