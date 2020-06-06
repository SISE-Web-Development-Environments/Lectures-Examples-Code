<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="grid-container">
      <div class="grid-item">
        <ol>
          <span v-for="(task, index) in tasks" :key="index">
            <li @click="removeItem(index)">{{ task }}</li>
          </span>
        </ol>
        <input v-model="new_item" v-bind:placeholder="placeholder" />
        <button v-on:click="addToList">Add</button>
        <br />
        * Click to remove
      </div>
      <div class="grid-item" style="  text-align: center">
        <img id="meme" src="./assets/meme.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "My TODO List",
      placeholder: "Add new task",
      tasks: [
        "Design Flow",
        "Choose Frameworks",
        "Write Requirments",
        "Write Code",
        "Write Tests"
      ],
      new_item: ""
    };
  },
  methods: {
    addToList() {
      this.tasks.push(this.new_item);
      this.new_item = "";
    },
    removeItem(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
#meme {
  height: 200px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
