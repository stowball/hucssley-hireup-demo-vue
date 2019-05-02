import Vue from 'vue';

Vue.mixin({
  created() {
    if (this.$options.styles) {
      this.styles = this.$options.styles;
    }
  },
});
