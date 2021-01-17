<template>
  <div class="defaultLayout d-flex flex-column align-items-stretch">
    <Header />
    <div class="container-fluid flex-grow-1 d-flex">
      <div class="ml-auto mr-auto d-flex">
        <GameContainer />
        <div>
          <Details />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/SiteHeader";
import Footer from "@/components/Footer/SiteFooter";
import GameContainer from "@/components/Board/GameContainer";
import Details from "@/components/Details/DetailsContainer";

export default {
  name: "GameBoard",
  components: {
    Header,
    Footer,
    GameContainer,
    Details
  }
};
</script>

<style lang="scss" scoped></style>
