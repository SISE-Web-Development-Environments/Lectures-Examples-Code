<template>
  <div>
    <div class="grid-container">
      <div class="grid-item">
        <todo-comp :initialTasks="['jhjf', 't2', 't3']"></todo-comp>
      </div>
      <div class="grid-item" style="  text-align: center">
        <img id="meme" src="./assets/meme.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./components/Tasks/todo/todo";

export default {
  name: "app",
  components: { "todo-comp": Todo }
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
