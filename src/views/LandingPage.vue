<template>
  <div class="defaultLayout d-flex flex-column align-items-stretch">
    <Header />
    <TournamentHeader />
    <b-container
      class="flex-grow-1 d-block background-primary mt-2 mb-2 d-flex"
    >
      <div class="m-auto">
        <TournamentJoinContainer />
        <TournamentListContainer />
        <TournamentDisplayContainer />
        <TournamentCreateContainer />
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/SiteHeader";
import Footer from "@/components/Footer/SiteFooter";
import TournamentHeader from "@/components/Tournaments/TournamentHeader";
import TournamentJoinContainer from "@/components/Tournaments/TournamentJoinContainer";
import TournamentDisplayContainer from "@/components/Tournaments/TournamentDisplayContainer";
import TournamentListContainer from "@/components/Tournaments/TournamentListContainer";
import TournamentCreateContainer from "@/components/Tournaments/TournamentCreateContainer";

export default {
  name: "LandingPage",
  components: {
    Header,
    Footer,
    TournamentHeader,
    TournamentJoinContainer,
    TournamentListContainer,
    TournamentDisplayContainer,
    TournamentCreateContainer
  }
};
</script>

<style lang="scss" scoped></style>
