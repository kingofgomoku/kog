<template>
  <div class="container detailsContainer p-1">
    Opponent
    <DetailsUser />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DetailsUser from "@/components/Details/DetailsUser";

export default {
  name: "DetailsContainer",
  components: {
    DetailsUser
  },
  computed: {
    ...mapGetters({})
  }
};
</script>

<style lang="scss" scoped>
.detailsContainer {
  padding: 5px;
  border: 1px solid #0776a6;
  background: #194d6d;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  color: white;
}
</style>
