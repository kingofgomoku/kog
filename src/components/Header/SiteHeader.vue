<template>
  <div class="container d-flex p-1">
    <div>
      <SiteLogo />
    </div>
    <UserLogo />
  </div>
</template>

<script>
import SiteLogo from "@/components/Header/SiteLogo";
import UserLogo from "@/components/Header/UserLogo";

export default {
  name: "SiteHeader",
  components: {
    SiteLogo,
    UserLogo
  },
  data() {
    return {
      key: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
