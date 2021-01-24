<template>
  <div id="mainBox" class="detailsContainer d-flex flex-column mt-1">
    <MessagingLog id="messagingLog" :boxheight="messageLogBox" />
    <ActionBox id="actionBox" :boxheight="actionBox" />
  </div>
</template>

<script>
import MessagingLog from "@/components/Messenger/MessagingLog";
import ActionBox from "@/components/Messenger/ActionBox";

export default {
  name: "MessagerContainer",
  components: {
    MessagingLog,
    ActionBox
  },
  data() {
    return {
      messageLogBox: 30,
      actionBox: 0
    };
  },
  mounted() {
    window.setTimeout(() => {
      let mainBox = document.getElementById("mainBox").clientHeight;
      let box2 = document.getElementById("actionBox").clientHeight;
      this.messageLogBox = mainBox - box2 - 30;
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
.detailsContainer {
  padding: 5px;
  min-width: 250px;
  max-width: 100%;
  border: 1px solid #0776a6;
  background: #194d6d;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  color: white;
  flex-grow: 1;
}
</style>
