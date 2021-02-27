<template>
  <div class="backgroundContainer">
    <img class="startLogo" src="@/assets/MainLogo.svg" alt="King of Gomoku" />
    <amplify-authenticator username-alias="email">
      <div v-if="authState === 'signedin' && user">
        <div>Hello, {{ user.username }}</div>
      </div>
      <amplify-sign-out></amplify-sign-out>
      <amplify-sign-up
        slot="sign-up"
        username-alias="email"
        :form-fields.prop="formFields"
      ></amplify-sign-up>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange, AuthStatus } from "@aws-amplify/ui-components";

export default {
  name: "Login",
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      if (authState === AuthStatus.SignedIn) {
        console.log("user successfully signed in!");
        this.$router.push("/home");
      }
      if (!authData) {
        console.log("user is not signed in");
      }
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      formFields: [
        {
          type: "email",
          label: "Email",
          placeholder: "example@domain.com",
          required: true
        },
        {
          type: "username",
          label: "IGN - In Game Name",
          placeholder: "TheLegend27",
          required: true
        },
        {
          type: "password",
          label: "Password",
          placeholder: "********",
          required: true
        }
      ]
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
