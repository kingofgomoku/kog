<template>
  <div class="defaultLayout d-flex flex-column align-items-stretch">
    <Header />
    <div class="container-fluid flex-grow-1 d-flex">
      <div class="m-auto d-flex">
        <GameContainer />
        <div class="d-flex flex-column">
          <Details />
          <GameDetails />
          <Messaging v-if="false" />
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
import GameDetails from "@/components/Details/GameDetails";
import Messaging from "@/components/Messenger/MessengerContainer";

export default {
  name: "GameBoard",
  components: {
    Header,
    Footer,
    GameContainer,
    Details,
    GameDetails,
    Messaging
  }
};
</script>

<style lang="scss" scoped></style>
