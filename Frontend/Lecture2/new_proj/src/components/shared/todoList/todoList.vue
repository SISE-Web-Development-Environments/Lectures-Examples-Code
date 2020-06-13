<template>
  <div :style="bgColor">
    <h1>{{ header }}</h1>
    <todoListItems :tasks="tasks"></todoListItems>
    <todoListActions v-on:new-item-added="addToList"></todoListActions>
    <br />* Click to remove
  </div>
</template>

<script>
import todoListItems from "./todoListItems";
import todoListActions from "./todoListActions";

export default {
  components: {
    todoListItems: todoListItems,
    todoListActions: todoListActions
  },
  props: { initialTasks: Array, bgColor: { type: String, required: true } },
  data() {
    return {
      header: "My TODO List",
      tasks: this.initialTasks
    };
  },
  methods: {
    addToList(new_item) {
      this.tasks.push(new_item);
      this.new_item = "";
    }
  }
};
</script>

<style>
</style>