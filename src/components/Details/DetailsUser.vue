<template>
  <div class="container detailsUserContainer d-flex">
    <div class="photoContainer mt-auto mb-auto mr-1"></div>
    <div class="detailsContainer mt-auto mb-auto d-block">
      <div class="name">Tao</div>
      <div class="winstreak">7W</div>
      <div class="elopoints">153</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsUser",
  data() {
    return {
      key: true
    };
  }
};
</script>

<style lang="scss" scoped>
.detailsUserContainer {
  padding: 5px;
  border: 1px solid #0776a6;
  border-radius: 5px;
}
</style>
