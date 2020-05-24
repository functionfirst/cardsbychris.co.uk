<template>
  <div>
    <div class="layout" id="wrapper">
      <site-header />

      <div id="main">
        <div class="inner">
          <slot />
        </div>
      </div>

      <!-- <site-footer /> -->
    </div>
  </div>
</template>

<script>
// import SiteFooter from "~/components/Footer";
import SiteHeader from "~/components/Header";

export default {
  components: {
    // SiteFooter,
    SiteHeader
  }
};
</script>
