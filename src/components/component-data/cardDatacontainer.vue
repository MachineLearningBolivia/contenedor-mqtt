<template>
  <section class="w-80 h-72 flex flex-col bg-gray-600 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-[0_0px_10px_rgba(255,255,255,_0.7)]">
    <div class="flex justify-between px-1 pt-1">
      <div class="w-16 h-16 flex text-white items-center justify-center bg-gray-600 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15">
        <v-icon :name= iconName scale="1.5"></v-icon>
      </div>
      <div class="relative">
        <div class="w-16 h-16 flex text-white items-center justify-center bg-gray-600 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15"
             @mouseover="showTooltip"
             @mouseleave="hideTooltip">
          <v-icon name="fa-info" scale="1.5"></v-icon>
        </div>
        <div class="absolute bg-opacity-90 bg-black text-white px-2 py-1 rounded-md text-sm;" v-show="isTooltipVisible">
          {{textInfo}}</div>
      </div>
    </div>
    <div class="flex text-center justify-center items-center text-white p-4">
      <h2 class="overflow-hidden whitespace-normal w-36 h-28 text-8xl">
        {{dataSection}}
      </h2>
    </div>
    <div class="text-center text-white p-4">
      <p class="text-2xl">
        {{nameSection}}
      </p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'CardContainer',
  props:{
    nameSection:{
      type: String,
      required: false
    },
    dataSection:{
      required: false
    },
    iconName:{
      type: String,
      required: false
    },
    textInfo:{
      type:String,
      required: false
    }
  },
  data() {
    return {
      isTooltipVisible: false,
      name: "fa-temperature-low"
    };
  },
  methods: {
    showTooltip() {
      this.isTooltipVisible = true;
    },
    hideTooltip() {
      this.isTooltipVisible = false;
    }
  }
}
</script>