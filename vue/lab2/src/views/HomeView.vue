<script>
import { config } from "../config";

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      fetch(`${config.apiUrl}/posts/`)
        .then((r) => r.json())
        .then((response) => {
          this.posts = [].concat(response);
        });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<template>
  <RouterLink to="/create" class="btn btn-success align-self-center mb-2"
    >Create Post</RouterLink
  >
  <div class="d-flex">
    <div class="col">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.description }}</td>
            <td>
              <RouterLink
                class="btn btn-primary"
                :to="{ name: 'post-details', params: { id: post.id } }"
              >
                View Details
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!--    <div class="col-4">-->
<!--      <RouterView />-->
<!--    </div>-->
  </div>
</template>
