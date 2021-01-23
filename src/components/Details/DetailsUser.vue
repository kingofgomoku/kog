<template>
  <div class="container detailsUserContainer d-flex">
    <div class="photoContainer mt-auto mb-auto mr-1">
      <UserImageContainer :userimage="userImage" />
    </div>
    <div class="detailsContainer mt-auto mb-auto d-block">
      <div class="name d-flex">
        <font-awesome-icon
          class="mt-auto mb-auto"
          :icon="['fa', 'address-card']"
          fixed-width
        />
        <div class="mt-auto mb-auto ml-1">
          Tao
        </div>
      </div>
      <div class="winstreak d-flex">
        <font-awesome-icon
          class="mt-auto mb-auto"
          :icon="['fa', 'dice-d6']"
          fixed-width
        />
        <div class="mt-auto mb-auto ml-1">
          7W
        </div>
      </div>
      <div class="elopoints d-flex">
        <font-awesome-icon
          class="mt-auto mb-auto"
          :icon="['fa', 'star']"
          fixed-width
        />
        <div class="mt-auto mb-auto ml-1">
          153
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserImageContainer from "@/components/User/ImageContainer";

export default {
  name: "DetailsUser",
  components: {
    UserImageContainer
  },
  data() {
    return {
      userImage:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
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
