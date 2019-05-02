<script>
import SvgIcon from '../SvgIcon/index.vue';

export default {
  styles: {
    root: `
      padding-b-300
      padding-h-400
      position-relative
      bp-1040--display-flex
      bp-1040--padding-0
      bp-1040--margin-r-n600
    `,
    button: `
      color-blue-1000
      display-flex
      font-weight-700
      line-height-100
      padding-400
      transition-duration-300
      transition-easing-ease
      transition-property-bg-color
      hocus--bg-color-neutral-300
    `,
    buttonMessages: 'align-items-center',
    buttonUser: `
      border-t-color-neutral-400
      border-t-style-solid
      border-t-width-100
      justify-content-space-between
      width-100
      is-active--bg-color-blue-300
    `,
    button__inner: `
      align-items-center
      display-flex
    `,
    button__caret: `
      icon-size-100
      margin-l-200
    `,
    icon: `
      icon-size-100
      margin-r-300
    `,
    userNav: `
      bg-color-neutral-0
      display-none
      bp-1040--border-t-width-0
      bp-1040--pin-r-0
      bp-1040--pin-t-100
      bp-1040--position-absolute
      bp-1040-pseudo-before--dropdown-shadow-600
      is-open--display-block
    `,
    userNav__item: `
      border-t-color-neutral-400
      border-t-style-solid
      border-t-width-100
    `,
    userNav__link: `
      align-items-center
      display-flex
      color-neutral-700
      padding-h-400
      padding-v-300
      bp-1040--padding-h-500
      bp-1040--padding-v-400
      transition-duration-200
      transition-easing-ease
      transition-property-all
      hocus--bg-color-neutral-200
      hocus--color-neutral-900
    `,
  },
  components: {
    SvgIcon,
  },
  props: {
    user: {
      required: true,
      type: String,
    },
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
  created() {
    this.userNavItems = [
      {
        icon: 'bust',
        label: 'Profile',
      },
      {
        icon: 'clipboard',
        label: 'Support Plan',
      },
      {
        icon: 'cog',
        label: 'Settings',
      },
      {
        icon: 'warning-sign',
        label: 'Report Incident',
      },
      {
        icon: 'key',
        label: 'Log out',
      },
    ];
  },
};
</script>

<template>
  <div v-bind:class="styles.root">
    <a
      href="#messages"
      v-bind:class="[styles.button, styles.buttonMessages]"
    >
      <svg-icon
        name="envelope"
        v-bind:class="styles.icon"
      />
      Messages
    </a>
    <button
      v-bind:aria-pressed={menuIsOpen}
      v-bind:class="[styles.button, styles.buttonUser, menuIsOpen && states.isActive]"
      v-on:click="toggleMenu"
    >
      <span v-bind:class="styles.button__inner">
        <img
          alt=""
          src="https://hireuptest.s3.amazonaws.com/storage/main/profile-pics/default-profile_dj6pzn777.png"
          v-bind:class="styles.icon"
        />
        {{ user }}
      </span>
      <svg-icon
        name="caret-down"
        v-bind:class="styles.button__caret"
      />
    </button>

    <ul v-bind:class="[styles.userNav, menuIsOpen && states.isOpen]">
      <li
        v-bind:class="styles.userNav__item"
        v-for="item in userNavItems"
        v-bind:key="item.label"
      >
        <a
          v-bind:class="styles.userNav__link"
          v-bind:href="item.label"
        >
          <svg-icon
            v-bind:class="styles.icon"
            v-bind:name="item.icon"
          />
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
