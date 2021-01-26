<template>
  <div class="backgroundContainer">
    <img class="startLogo" src="@/assets/MainLogo.svg" alt="King of Gomoku" />
    <amplify-authenticator>
      <div v-if="authState === 'signedin' && user">
        <div>Hello, {{ user.username }}</div>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "Login",
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined
    };
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  mounted() {
    console.log("AUTH STATE", this.authState !== "signedin", this.authState);
  }
};
</script>
<style lang="scss" scoped>
.backgroundContainer {
  background: #194d6d;
}
.startLogo {
  position: fixed;
  top: 1rem;
  left: 4rem;
  width: 30rem;
  height: auto;
}
</style>
