<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <template>
      <div>
        <Header />
        <nuxt />
        <Footer />
      </div>
    </template>
  </transition>
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
