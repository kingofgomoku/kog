<template>
  <a @click="onClick" class="cLinkButton text-font-dark cursor-pointer">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "LinkButton",
  props: {
    text: {
      type: String,
      required: true,
      default: "TEXT HERE"
    }
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.cLinkButton {
  text-decoration: none;
}
.cLinkButton:hover {
  transform: scale(1.05);
}
</style>
