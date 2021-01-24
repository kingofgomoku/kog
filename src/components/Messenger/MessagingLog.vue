<template>
  <div
    ref="chatContainer"
    class="detailsUserContainer"
    :style="caculateBoxHeight"
  >
    <div v-for="chat in chatroom" :key="chat._id" class="d-flex flex-row">
      <div
        class="chats mb-1"
        :class="{
          'ml-auto chatHome': chat.player,
          'mr-auto chatAway': !chat.player
        }"
      >
        {{ chat.message }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MessagingLog",
  props: {
    boxheight: {
      type: Number,
      required: true
    }
  },
  watch: {
    chatroom(newValue) {
      if (newValue.length !== 0) {
        window.setTimeout(() => {
          this.$refs.chatContainer.children[newValue.length - 1].scrollIntoView(
            {
              behavior: "smooth",
              block: "end"
            }
          );
        }, 250);
      }
    }
  },
  computed: {
    ...mapGetters({
      chatroom: "messagingReturnChatRoom"
    }),
    caculateBoxHeight() {
      return {
        "min-height": `${this.boxheight}px`,
        "max-height": `${this.boxheight}px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.detailsUserContainer {
  padding: 5px;
  border: 1px solid #0776a6;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  overflow-x: hidden;
  overflow-y: scroll;
}

.detailsUserContainer::-webkit-scrollbar {
  display: none;
}

.detailsUserContainer {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.chats {
  max-width: 125px;
  height: auto;
  word-wrap: break-word;
}

.chatHome {
  padding: 5px 5px 10px 5px;
  border-radius: 5px;
  background: #912f56;
}

.chatAway {
  padding: 5px 5px 10px 5px;
  border-radius: 5px;
  background: #361f27;
}
</style>
