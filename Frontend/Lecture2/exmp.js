// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})


<script>
    new Vue({
        el: "#app",
data: {
    count: 0
  }
},
        computed: {
            userName() {
                // ***** calling method from different places
                //     if (this.first_name == "" || this.last_name == "") {
                //         this.getUserNameFromServer()
                //     }
                return `${this.first_name} ${this.last_name}`
            },

            methods: {
                getUserNameFromServer() {
                    // .... AJAX request to server
                }
            },

        })
</script>