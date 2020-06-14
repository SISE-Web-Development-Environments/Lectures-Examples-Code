<template>
  <div>
    <BtsNavbar></BtsNavbar>
    <h1>Welcome To My Great Site!</h1>
    Our API server is: {{ this.$store.server_domain }}
    <br />
    <p>
      <b>The different view will be shown below me:</b>

      <router-view style="min-height:200px;"></router-view>

      
    </p>
    <footer>All copyrights belongs to me</footer>
    <GlobalTest></GlobalTest>
  </div>
</template>

<script>
import BtsNavbar from "./components/navbar-bootstrap";

export default {
  name: "app",
  components: { BtsNavbar: BtsNavbar },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style></style>
