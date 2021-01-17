<template>
  <div class="defaultLayout d-flex flex-column align-items-stretch">
    <Header />
    <div class="container-fluid flex-grow-1 d-flex">
      <GameContainer />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/SiteHeader";
import Footer from "@/components/Footer/SiteFooter";
import GameContainer from "@/components/GameContainer";

export default {
  name: "GameBoard",
  components: {
    Header,
    Footer,
    GameContainer
  }
};
</script>

<style lang="scss" scoped></style>
