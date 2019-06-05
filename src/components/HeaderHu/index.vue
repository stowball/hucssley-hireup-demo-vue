<script>
import ContainerHu from '../ContainerHu/index.vue';
import PrimaryNavHu from './PrimaryNavHu.vue';
import SecondaryNavHu from './SecondaryNavHu.vue';
import SvgHu from '../SvgHu/index.vue';

export default {
  styles: {
    root: `
      group
      background-color:neutral-0
      box-shadow:500
      position:relative
      z-index:100
    `,
    container: `
      background-color:neutral-0
      display:flex
      justify-content:space-between
      @mq-1040--justify-content:flex-start
    `,
    logo: 'color:blue-600',
    logo__icon: `
      icon-size:logo
      margin-right:400
      margin-vertical:400
    `,
    hamburger: `
      align-self:center
      border-radius:1000
      padding:300
      group__is-open--background-color:neutral-300
      &:hocus--background-color:neutral-300
      @mq-1040--display:none
    `,
    hamburger__icon: `
      icon-size:200
      svg-fill-color:neutral-700
    `,
    nav: `
      background-color:neutral-0
      display:none
      pos-left:0
      pos-right:0
      pos-top:100
      position:absolute
      group__is-open--display:block
      group__@mq-1040-is-open--display:flex
      @mq-until-1039:before--dropdown-shadow:500
      @mq-1040--display:flex
      @mq-1040--justify-content:space-between
      @mq-1040--position:static
      @mq-1040--width:100
      @mq-1040:before--display:none
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
