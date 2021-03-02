<template>
  <div
    @click="onClick"
    class="tournamentButton background-white text-font-dark cursor-pointer"
  >
    {{ text }}
    <font-awesome-icon class="ml-1" :icon="icon" fixed-width />
  </div>
</template>

<script>
export default {
  name: "CButtonAlt",
  props: {
    text: {
      type: String,
      required: true,
      default: "TEXT HERE"
    },
    icon: {
      type: Array,
      required: true,
      default: () => ["fas", "dizzy"]
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
.tournamentButton {
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  transition: all 0.15s ease-in-out;
}
.tournamentButton:hover {
  -webkit-box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.4);
  box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
}
</style>
