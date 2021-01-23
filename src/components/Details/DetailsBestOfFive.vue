<template>
  <div class="d-block">
    <div class="d-flex">
      <div class="structured mt-auto mb-auto">You</div>
      <div
        v-for="(win, index) in playerone"
        class=" structured m-auto"
        :key="index"
      >
        <img v-if="win" width="24" height="24" :src="crown" alt="win" />
        <font-awesome-icon v-else :icon="['fa', 'circle']" fixed-width />
      </div>
    </div>
    <div class="d-flex">
      <div class="structured mt-auto mb-auto">Opp</div>
      <div
        v-for="(win, index) in playertwo"
        class="structured m-auto"
        :key="index"
      >
        <img v-if="win" width="24" height="24" :src="crown" alt="win" />
        <font-awesome-icon v-else :icon="['fa', 'circle']" fixed-width />
      </div>
    </div>
  </div>
</template>

<script>
import KOGCrown from "@/assets/kogMainCrown.svg";

export default {
  name: "DetailsBestOfFive",
  // props: {
  //   playerone: {
  //     type: Array,
  //     required: true,
  //     default: () => []
  //   },
  //   playertwo: {
  //     type: Array,
  //     required: true,
  //     default: () => []
  //   }
  // },
  data() {
    return {
      playerone: [true, true, false],
      playertwo: [true, true, true],
      crown: KOGCrown
    };
  }
};
</script>

<style lang="scss" scoped>
.structured {
  max-width: 45px;
  min-width: 45px;
}
</style>
