<template>
  <header class="site-navbar py-3 animated slideInDown" role="banner">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-6 col-xl-2" data-aos="fade-down">
          <h1 class="mb-0">
            <nuxt-link to="/" class="text-black h2 mb-0">Photon</nuxt-link>
          </h1>
        </div>
        <div class="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
          <nav
            class="site-navigation position-relative text-right text-lg-center"
            role="navigation"
          >
            <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/gallery">Gallery</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/services">Services</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-6 col-xl-2 text-right" data-aos="fade-down">
          <div class="d-none d-xl-inline-block">
            <ul
              class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0"
              data-class="social"
            >
              <li>
                <a href="#" class="pl-0 pr-3">
                  <span class="icon-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#" class="pl-3 pr-3">
                  <span class="icon-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#" class="pl-3 pr-3">
                  <span class="icon-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#" class="pl-3 pr-3">
                  <span class="icon-youtube-play"></span>
                </a>
              </li>
            </ul>
          </div>
          <div
            class="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
            style="position: relative; top: 3px;"
          >
            <a @click="toggleSideBar()" class="site-menu-toggle js-menu-toggle text-black">
              <span class="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  mounted() {
    if (process.client) {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  },
  destroyed() {
    if (process.client) {
      document.removeEventListener("resize", this.handleResize());
    }
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 1197) {
        document.body.classList.remove("offcanvas-menu");
      }
    },
    toggleSideBar() {
      if (process.client) {
        document.body.classList.toggle("offcanvas-menu");
      }
    }
  }
};
</script>
