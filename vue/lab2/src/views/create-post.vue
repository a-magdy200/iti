<template>
  <form v-on:submit.prevent="submit">
    <div>
      <label
        >Title
        <input class="form-control" name="title" type="text" v-model="post.title" />
      </label>
    </div>
    <div>
      <label
        >Description
        <textarea class="form-control" name="description" v-model="post.description" />
      </label>
    </div>
    <button class="btn btn-success" type="submit">Create</button>
  </form>
</template>

<script>
import { config } from "../config";

export default {
  name: "create-post",
  data() {
    return {
      post: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    submit() {
      fetch(`${config.apiUrl}/posts`, {
        method: "POST",
        body: JSON.stringify(this.post),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
};
</script>

<style scoped></style>
