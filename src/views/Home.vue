<template>
  <div class="container-fluid">
    <header>
      <Header />
    </header>
    <section>
      <Present />
    </section>
    <section>
      <Cards />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import Present from "@/components/Present.vue";
import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Present,
    Cards,
    Footer,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
section {
  margin-top: 3px;
  margin-bottom: 3px;
}
</style>