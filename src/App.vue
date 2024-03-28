<template>
  <div class="bg-black flex flex-row">
    <SideMenu/>
    <router-view/>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import SideMenu from "./components/component-sidemenu/sideMenu.vue";
export default defineComponent({
  name: 'App',
  components: {SideMenu}
});
</script>
