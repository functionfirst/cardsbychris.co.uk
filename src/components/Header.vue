<template>
  <header id="header">
    <div class="inner">
      <site-logo />
      <site-nav />
    </div>
  </header>
</template>

<script>
import SiteNav from "~/components/Nav";
import SiteLogo from "~/components/Logo";
export default {
  components: {
    SiteNav,
    SiteLogo
  }
};
</script>
