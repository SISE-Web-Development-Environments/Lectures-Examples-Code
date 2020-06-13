<template>
  <div>
    <h1>{{ header }}</h1>
    <todo-list-items v-bind:tasks="tasks"></todo-list-items>
    <todo-btn-actions placeholder="Add new task" v-on:addItem="addToList"></todo-btn-actions>

    <br />* Click to remove
  </div>
</template>

<script>
import TodoListItems from "./todoListItems";
import TodoButtonActions from "./todoButtonsActions";

export default {
  components: {
    "todo-list-items": TodoListItems,
    "todo-btn-actions": TodoButtonActions
  },
  props: ["initialTasks"],
  data() {
    return {
      tasks: this.initialTasks,
      header: "My TODO List"
    };
  },

  methods: {
    addToList(new_item) {
      this.tasks.push(new_item);
    }
  }
};
</script>

<style>
</style>