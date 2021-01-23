<template>
  <div class="container detailsContainer p-1 mt-1">
    <DetailsBestOfFive />
    <DetailsNextMoveLog />
  </div>
</template>

<script>
import DetailsBestOfFive from "@/components/Details/DetailsBestOfFive";
import DetailsNextMoveLog from "@/components/Details/DetailsNextMoveLog";

export default {
  name: "GameDetails",
  components: {
    DetailsBestOfFive,
    DetailsNextMoveLog
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
