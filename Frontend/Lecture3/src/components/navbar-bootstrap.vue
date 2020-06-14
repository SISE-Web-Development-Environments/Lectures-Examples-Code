<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="a" active-class="active" class="nav-link" exact
      >Home</router-link
    >

    <router-link
      to="/search"
      tag="a"
      active-class="active"
      exact
      class="nav-link"
      >Search</router-link
    >
  </ul>
</template>

<script>
export default {
  name: "navbar-bootstrap"
};
</script>

<style></style>
