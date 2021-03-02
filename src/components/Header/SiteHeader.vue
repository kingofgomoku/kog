<template>
  <b-container>
    <div class="d-flex py-1">
      <div>
        <SiteLogo />
      </div>
      <UserLogo v-if="false" />
      <div class="ml-auto my-auto">
        <b-badge variant="primary" class="mr-3">{{
          user.data.getUser.name
        }}</b-badge>
        <b-badge variant="danger" @click="signout">Signout</b-badge>
      </div>
    </div>
  </b-container>
</template>

<script>
import SiteLogo from "@/components/Header/SiteLogo";
import UserLogo from "@/components/Header/UserLogo";
import { mapGetters } from "vuex";

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
  },
  computed: {
    ...mapGetters({
      user: "userGetUser"
    })
  },
  methods: {
    signout() {
      this.$store.dispatch("userSignOut");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
