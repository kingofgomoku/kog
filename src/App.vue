<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  head() {
    return {
      titleTemplate: "King Of Gomoku",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "./assets/Logo.png"
        }
      ],
      meta: [
        { "http-equiv": "cache-control", content: "max-age=0" },
        { "http-equiv": "cache-control", content: "no-cache" },
        { "http-equiv": "expires", content: "0" },
        { "http-equiv": "expires", content: "Tue, 01 Jan 1980 1:00:00 GMT" },
        { "http-equiv": "pragma", content: "no-cache" },
        {
          hid: "description",
          name: "description", // <-- moved this over from index.vue
          content: "Be The Gomoku King"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  min-height: 100%;
  width: 100%;
}
</style>
