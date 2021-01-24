<template>
  <div class="ml-auto mr-2 d-flex">
    <div class="mr-1">
      <UserImageContainer :userimage="userImage" />
    </div>
    <div class="mt-auto mb-auto">
      <font-awesome-icon :icon="['fa', 'bars']" fixed-width />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserImageContainer from "@/components/User/ImageContainer";

export default {
  name: "UserLogo",
  components: {
    UserImageContainer
  },
  computed: {
    ...mapGetters({})
  },
  data() {
    return {
      userImage:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
    };
  }
};
</script>

<style lang="scss" scoped></style>
