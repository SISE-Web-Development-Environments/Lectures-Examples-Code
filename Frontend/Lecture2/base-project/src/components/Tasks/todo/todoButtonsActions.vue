<template>
  <div>
    <input v-model="new_item" v-bind:placeholder="placeholder" />
    <button v-on:click="addToList">Add</button>
  </div>
</template>

<script>
export default {
  props: ["placeholder"],
  data() {
    return {
      new_item: ""
    };
  },
  methods: {
    addToList() {
      this.$emit("addItem", this.new_item);
      this.new_item = "";
    }
  }
};
</script>

<style>
</style>