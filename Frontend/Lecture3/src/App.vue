<template>
  <div style="padding: 20px">
    <BtsNavbar></BtsNavbar>

    <h1>Welcome To My Great Site!</h1>
    <p>Our API server is: {{ this.$store.state.server_domain }}</p>
    <p>Our liga is: {{ this.$store.state.league }}</p>
    <br />

    <p style="font-weight: bold; color: green">
      The different view will be shown below me:
    </p>
    <GlobalTest></GlobalTest>
    <router-view id="router-view" style="min-height: 900px"> </router-view>

    <footer style="background-color: purple; color: white">
      &#169; All copyrights belongs to me
    </footer>
  </div>
</template>

<script>
import BtsNavbar from "./components/navbar-bootstrap";

export default {
  name: "app",
  components: { BtsNavbar: BtsNavbar },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  created() {
    this.$store.actions.initiate();
  },
};
</script>

<style></style>
