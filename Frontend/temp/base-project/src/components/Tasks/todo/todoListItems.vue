<template>
  <div>
    <ol>
      <span v-for="(task, index) in tasks" :key="index">
        <li @click="removeItem(index)">{{ task }}</li>
      </span>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["tasks"],
  // like writing data: function() {
  methods: {
    removeItem(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

