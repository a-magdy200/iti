<template>
  <div class="container">
    <div class="d-flex justify-content-center flex-column">
      <div class="d-flex align-items-center py-3 mb-2">
        <router-link class="btn btn-primary" to="/"> Home </router-link>
        <router-link class="ms-2 btn btn-success" to="/create">
          Create Post
        </router-link>
      </div>
      <RouterView />
    </div>
  </div>
</template>
