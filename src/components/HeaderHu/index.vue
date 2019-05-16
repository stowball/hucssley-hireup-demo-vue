<script>
import ContainerHu from '../ContainerHu/index.vue';
import PrimaryNavHu from './PrimaryNavHu.vue';
import SecondaryNavHu from './SecondaryNavHu.vue';
import SvgHu from '../SvgHu/index.vue';

export default {
  styles: {
    root: `
      group
      bg-color-neutral-0
      box-shadow-500
      position-relative
      z-index-100
    `,
    container: `
      display-flex
      justify-content-space-between
      position-relative
      bp-1040--justify-content-flex-start
    `,
    logo: 'color-blue-600',
    logo__icon: `
      icon-size-logo
      margin-r-400
      margin-v-400
    `,
    hamburger: `
      align-self-center
      border-radius-1000
      padding-300
      bp-1040--display-none
      group__is-open--bg-color-neutral-300
      hocus--bg-color-neutral-300
    `,
    hamburger__icon: `
      icon-size-200
      svg-fill-color-neutral-700
    `,
    nav: `
      bg-color-neutral-0
      display-none
      pos-l-0
      pos-r-0
      pos-t-100
      position-absolute
      bp-1040--display-flex
      bp-1040--justify-content-space-between
      bp-1040--position-static
      bp-1040--width-100
      bp-1040-pseudo-before--display-none
      group__is-open--display-block
      group__bp-1040-is-open--display-flex
      pseudo-before--dropdown-shadow-500
    `,
  },
  components: {
    ContainerHu,
    PrimaryNavHu,
    SecondaryNavHu,
    SvgHu,
  },
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<template>
  <header v-bind:class="[styles.root, menuIsOpen && states.isOpen]">
    <container-hu v-bind:class="styles.container">
      <a
        aria-label="Hireup"
        href="/"
        v-bind:class="styles.logo"
      >
        <svg-hu
          name="hireup"
          v-bind:class="styles.logo__icon"
        />
      </a>

      <button
        aria-label="Open navigation"
        v-bind:aria-pressed="menuIsOpen"
        v-bind:class="styles.hamburger"
        v-on:click="toggleMenu"
      >
        <svg-hu
          name="hamburger"
          v-bind:class="styles.hamburger__icon"
        />
      </button>

      <nav v-bind:class="styles.nav">
        <primary-nav-hu v-bind:selected-index="2" />
        <secondary-nav-hu user="Jennifer W" />
      </nav>
    </container-hu>
  </header>
</template>
