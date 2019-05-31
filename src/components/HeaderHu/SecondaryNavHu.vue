<script>
import SvgHu from '../SvgHu/index.vue';

export default {
  styles: {
    root: `
      padding-bottom:300
      padding-horizontal:400
      position:relative
      @mq-1040--display:flex
      @mq-1040--padding:0
      @mq-1040--margin-right:-600
    `,
    button: `
      color:blue-1000
      display:flex
      font-weight:700
      line-height:100
      padding:400
      transition-duration:300
      transition-easing:ease
      transition-property:bg-color
      &:hocus--bg-color:neutral-300
    `,
    buttonMessages: `
      align-items:center
      flex-shrink:0 // ie11
    `,
    buttonUser: `
      border-top-color:neutral-400
      border-top-style:solid
      border-top-width:100
      justify-content:space-between
      width:100
      is-active--bg-color:blue-300
    `,
    button__inner: `
      align-items:center
      display:flex
    `,
    button__caret: `
      align-self:center // ie11
      icon-size:100
      margin-left:200
    `,
    icon: `
      border-radius:1000
      icon-size:100
      margin-right:300
    `,
    userNav: `
      bg-color:neutral-0
      display:none
      is-open--display:block
      @mq-1040--border-top-width:0
      @mq-1040--pos-right:0
      @mq-1040--pos-top:100
      @mq-1040--position:absolute
      @mq-1040:before--dropdown-shadow:600
    `,
    userNav__item: `
      border-top-color:neutral-400
      border-top-style:solid
      border-top-width:100
    `,
    userNav__link: `
      align-items:center
      display:flex
      color:neutral-700
      padding-horizontal:400
      padding-vertical:300
      transition-duration:200
      transition-easing:ease
      transition-property:all
      @mq-1040--padding-horizontal:500
      @mq-1040--padding-vertical:400
      &:hocus--bg-color:neutral-200
      &:hocus--color:neutral-900
    `,
  },
  components: {
    SvgHu,
  },
  props: {
    user: {
      required: true,
      type: String,
    },
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
      <svg-hu
        name="envelope"
        v-bind:class="styles.icon"
      />
      Messages
    </a>
    <button
      v-bind:aria-pressed="menuIsOpen.toString()"
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
      <svg-hu
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
          <svg-hu
            v-bind:class="styles.icon"
            v-bind:name="item.icon"
          />
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
