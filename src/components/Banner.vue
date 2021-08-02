<template>
  <div class="banner" :style="bannerStyles" :class="`banner__${position}`">
    <slot></slot>
  </div>
</template>

<script>

const defaultStyles = {
  left: 0,
  right: 0,
};

export default {
  name: "Banner",
  props: {
    position: {
      type: String,
      default: 'top',
      validator(position) {
        return ['top', 'bottom'].indexOf(position) > -1;
      },
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles,
      },
    };
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://viewer.shapediver.com/v2/2.15.0/sdv.concat.min.js')
    document.head.appendChild(externalScript)
    // there is a slight chance that loading has been completed already
    // if (document.readyState === "loading") {
    //   document.addEventListener("DOMContentLoaded", this.initShapediverApp, false);
    // } else {
    //   this.initShapediverApp();
    // }
  },
  methods: {
    async initShapediverApp() {
      // ShapeDiver Viewer Initialisation

      // Settings can be defined here, or as attributes of the viewport container. Settings defined here take precedence.
      let _container = document.getElementById('sdv-container');
      let settings = {
        container: _container,
        ticket: "85d9977f5426033e058a60c8b81c2c91d331d5eec7bdfed66d354132539d4efb0d01bd6e5d7bc61bc8894b820fff1922d2a2e7e6b7f5883d244f93f0c9ce73daa540ccd7b6d1a1d9ccc40307c3549ff3bbce1a7e902ac438abb53b472d73f2fd2578881f8846e73c4af238f34b9725c41232a2e3129d-d34ace0dbe577c6152ee63654b9e807c",
        modelViewUrl: "eu-central-1"
      };
      // See https://viewer.shapediver.com/v2/2.14.0/doc/SDVApp.ParametricViewer.html for all settings available via the constructor.
      window.api = await new window.SDVApp.ParametricViewer(settings);
    }
  }
};
</script>

<!--<style lang="scss" scoped>-->
<!--.banner {-->
<!--  padding: 12px;-->
<!--  background-color: #fcf6cd;-->
<!--  color: #f6a623;-->
<!--  text-align: left;-->
<!--  position: fixed;-->
<!--  z-index: 2;-->
<!--}-->

<!--.banner__top {-->
<!--  top: 0;-->
<!--}-->

<!--.banner__bottom {-->
<!--  bottom: 0;-->
<!--}-->
<!--</style>-->