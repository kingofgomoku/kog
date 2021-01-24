<template>
  <div class="d-flex">
    <input
      class="messageBox"
      v-model="message"
      placeholder="Write your message here"
      @keyup.enter="onSubmit"
    />
    <div @click="onSubmit" class="m-auto d-flex">
      <font-awesome-icon
        class="sendAction m-auto"
        :icon="['fa', 'pen-square']"
        fixed-width
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ActionBox",
  data() {
    return {
      message: "",
      player: true
    };
  },
  computed: {
    ...mapGetters({})
  },
  methods: {
    onSubmit() {
      console.log("ahsdasdasd", this.message);
      this.$store.dispatch("messagingSendMessage", {
        message: this.message,
        player: this.player
      });
      this.message = "";
      this.player = !this.player;
    }
  }
};
</script>

<style lang="scss" scoped>
.messageBox {
  border: none;
  padding: 5px;
  background: transparent;
  color: white;
  width: 200px;
  font-family: Tahoma, sans-serif;
}
.messageBox:focus {
  outline: none;
}
.messageBox::placeholder {
  color: white;
}
.sendAction {
  cursor: pointer;
  font-size: 2rem;
}
</style>
