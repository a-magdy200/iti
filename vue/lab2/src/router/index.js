import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetails from "../views/PostDetails.vue";
import CreatePost from "../views/create-post.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/:id",
          name: "post-details",
          component: PostDetails,
          props: true,
        },
        {
          path: "/create",
          name: "create",
          component: CreatePost,
        },
      ],
    },
    {
      path: "/:id",
      name: "post-details",
      component: PostDetails,
      props: true,
    },
    {
      path: "/create",
      name: "create",
      component: CreatePost,
    },
  ],
});

export default router;
