<template>
  <div>
    <Header />
    <div class="site-wrap">
      <SideBarMobile />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style >
.nuxt-link-exact-active {
  font-weight: 700;
}
</style>
