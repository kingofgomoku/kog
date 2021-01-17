<template>
  <div class="container d-flex pt-1 pb-1">
    <div class="ml-auto mr-auto d-block">
      <div class="d-flex">
        <div class="mr-2">
          Privacy Policy
        </div>
        <div class="mr-2">
          Terms and Condition
        </div>
      </div>
      <div class="ml-auto mr-auto">
        {{ appVersion }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SiteFooter",
  data() {
    return {
      key: true
    };
  },
  computed: {
    ...mapGetters({
      appVersion: "getAppVersion"
    })
  }
};
</script>

<style lang="scss" scoped></style>
