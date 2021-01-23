<template>
  <div class="container detailsContainer p-1">
    <div class="d-flex">
      <div>
        Opponent
      </div>
      <div class="ml-auto">
        <font-awesome-icon :icon="['fa', 'ellipsis-v']" fixed-width />
      </div>
    </div>
    <DetailsUser class="mt-1" />
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
  min-width: 250px;
  max-width: 100%;
  border: 1px solid #0776a6;
  background: #194d6d;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  color: white;
}
</style>
