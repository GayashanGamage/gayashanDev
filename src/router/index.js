import Blog from "@/components/Blog.vue";
import IndividualWork from "@/components/IndividualWork.vue";
import Leetcode from "@/components/Leetcode.vue";
import Mywork from "@/components/Mywork.vue";
import Techstack from "@/components/Techstack.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Mywork,
    },
    {
      path: "/project/:projectName",
      name: "singleProject",
      component: IndividualWork,
    },
    {
      path: "/leetcode",
      name: "leetcode",
      component: Leetcode,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/techstack",
      name: "techstack",
      component: Techstack,
    },
  ],
});

export default router;
