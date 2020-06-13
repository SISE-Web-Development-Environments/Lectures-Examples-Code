<template>
  <div>
    <h1>Search Page</h1>List of global items:
    <ul>
      <li v-for="(item, index) in $store.items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style></style>
