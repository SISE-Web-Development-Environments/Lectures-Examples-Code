<template>
  <ol>
    <span v-for="(task, index) in tasks" :key="index">
      <li @click="removeItem(index)">{{ task }}</li>
    </span>
  </ol>
</template>

<script>
export default {
  props: {
    tasks: Array
  },
  methods: {
    removeItem(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
</style>