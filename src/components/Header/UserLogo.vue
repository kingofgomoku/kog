<template>
  <div class="ml-auto mr-2 d-flex">
    <div class="mr-1">
      User
    </div>
    <div>
      menu
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserLogo",
  computed: {
    ...mapGetters({})
  }
};
</script>

<style lang="scss" scoped></style>
