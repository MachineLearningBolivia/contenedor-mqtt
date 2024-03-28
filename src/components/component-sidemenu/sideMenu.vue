<template>
<div class="flex h-screen w-16 flex-col justify-between border-e bg-white">
<div>
  <div class="border-t border-gray-100">
    <div class="px-2">
      <ul class="space-y-1 border-t border-gray-100 pt-4">
        <li>
          <router-link
              to="/"
              class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <v-icon name = "fa-dumpster" scale = '2'/>

            <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
            >
                Contenedor 1
              </span>
          </router-link>
        </li>

        <li>
          <router-link
              to="/cont2"
              class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <v-icon name = "fa-dumpster" scale = '2'/>

            <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
            >
                Contenedor 2
              </span>
          </router-link>
        </li>

        <li>
          <router-link
              to="/cont3"
              class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <v-icon name = "fa-dumpster" scale = '2'/>

            <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
            >
                Contenedor 3
              </span>
          </router-link>
        </li>


      </ul>
    </div>
  </div>
</div>

<div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
  <form action="#">
    <button
        type="submit"
        class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>

      <span
          class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
      >
          Logout
        </span>
    </button>
  </form>
</div>
</div>
</template>
<script>
export default {
  name:'SideMenu'
}
</script>