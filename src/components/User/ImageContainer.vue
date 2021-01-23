<template>
  <div>
    <div class="photoContainer">
      <div v-if="imageChecker">
        <img class="photo" :src="userimage" alt="user image profile" />
      </div>
      <div v-else class="d-flex">
        <div class="m-auto noPhotos">
          <font-awesome-icon
            class="noPhotos"
            :icon="['fa', 'user']"
            fixed-width
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageContainer",
  props: {
    userimage: {
      type: String,
      required: true
    }
  },
  computed: {
    imageChecker() {
      if (this.userimage.length == 0) {
        return false;
      } else {
        return this.userimage;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.photoContainer {
  width: 55px;
  height: 55px;
  position: relative;
  clip-path: circle(44% at 50% 50%);
}
.photo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 125%;
}
.noPhotos {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
</style>
