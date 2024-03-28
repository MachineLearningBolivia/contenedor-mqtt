import { createRouter, createWebHistory } from "vue-router";
import Visualizer from "../views/visualizer.vue";
import Visualizer2 from "../views/visualizer2.vue";
import Visualizer3 from "../views/visualizer3.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: "/",
        name: 'Visualizer',
        component: Visualizer,
    },
        {
            path: "/cont2",
            name: 'Visualizer2',
            component:Visualizer2
        },
        {
            path: "/cont3",
            name: 'Visualizer3',
            component:Visualizer3
        }
    ],
});

export default router;
