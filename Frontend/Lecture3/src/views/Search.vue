<template>
  <div>
    <h1>Search Page</h1>
    <GlobalTest></GlobalTest>
    List of global items:
    <ul>
      <li v-for="(item, index) in myItems" :key="index">{{ item }}</li>
    </ul>
    <button @click="add">ADD</button>
  </div>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      myItems: this.$store.items
    };
  },
  methods: {
    add() {
      this.$store.items.push("new");
      this.myItems = this.$store.items;
      console.log(this.$store.items);
    }
  }
};
</script>

<style></style>
