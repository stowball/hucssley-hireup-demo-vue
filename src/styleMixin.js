import Vue from 'vue';

Vue.mixin({
  created() {
    if (this.$options.styles) {
      this.styles = this.$options.styles;

      this.states = {
        isClosed: 'is-closed',
        isCollapsed: 'is-collapsed',
        isDisabled: 'is-disabled',
        isExpanded: 'is-expanded',
        isHidden: 'is-hidden',
        isLoading: 'is-loading',
        isOpen: 'is-open',
        isPressed: 'is-pressed',
        isSelected: 'is-selected',
        isVisible: 'is-visible',
      };
    }
  },
});
