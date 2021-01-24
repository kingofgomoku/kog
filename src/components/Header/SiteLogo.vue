<template>
  <div class="">
    <div class="siteLogo" width="100" height="50">
      <img
        class="siteLogoImage"
        src="../../assets/MainLogo.svg"
        alt="King of Gomoku"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteLogo",
  data() {
    return {
      key: true
    };
  },
  methods: {
    siteLogoOnClick() {}
  }
};
</script>

<style lang="scss" scoped>
.siteLogoImage {
  width: 75px;
  height: auto;
}
</style>
