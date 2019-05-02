<script>
import PrimaryNav from './PrimaryNav.vue';
import SecondaryNav from './SecondaryNav.vue';
import SvgIcon from '../SvgIcon/index.vue';

export default {
  styles: {
    root: `
      group
      bg-color-neutral-0
      shadow-500
    `,
    rootIsOpen: 'is-open',
    container: `
      display-flex
      justify-content-space-between
      margin-h-auto
      max-width-container
      padding-h-600
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
      box-sizing-content-box
      icon-size-200
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
      pin-l-0
      pin-r-0
      pin-t-100
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
    PrimaryNav,
    SecondaryNav,
    SvgIcon,
  },
  data() {
    return ({
      menuIsOpen: false,
    });
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<template>
  <header v-bind:class="[styles.root, menuIsOpen && styles.rootIsOpen]">
    <div v-bind:class="styles.container">
      <a
        aria-label="Hireup"
        href="/"
        v-bind:class="styles.logo"
      >
        <svg-icon
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
        <svg-icon
          name="hamburger"
          v-bind:class="styles.hamburger__icon"
        />
      </button>

      <nav v-bind:class="styles.nav">
        <primary-nav v-bind:selected-index="2" />
        <secondary-nav user="Jennifer W" />
      </nav>
    </div>
  </header>
</template>
