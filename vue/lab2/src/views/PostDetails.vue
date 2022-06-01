<script>
import { config } from "../config";

export default {
  props: ["id"],
  data() {
    return {
      post: {
        id: "",
        title: "",
        description: "",
      },
    };
  },
  methods: {
    getPostDetails() {
      fetch(`${config.apiUrl}/posts/${this.$route.params.id}`)
        .then((r) => r.json())
        .then((response) => {
          this.post = {
            ...response,
          };
        });
    },
    deletePost() {
      fetch(`${config.apiUrl}/posts/${this.$route.params.id}`, {
        method: "DELETE",
      }).then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
  created() {
    this.getPostDetails();
  },
  watch: {
    id() {
      this.getPostDetails();
    },
  },
};
</script>
<template>
  <div class="card">
    <div class="card-body">
      <p class="lead">
        <span>ID: </span><span>{{ post.id }}</span>
      </p>
      <p class="lead">
        <span>Title: </span><span>{{ post.title }}</span>
      </p>
      <p class="lead">
        <span>Description: </span><span>{{ post.description }}</span>
      </p>
      <button class="btn btn-danger" @click="deletePost">Delete</button>
    </div>
  </div>
</template>
