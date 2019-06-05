<script>
export default {
  styles: {
    root: `
      display:flex
      flex-direction:column
      height:100
      padding-bottom:300
      padding-horizontal:400
      @mq-1040--flex-direction:row
      @mq-1040--padding-left:0
      @mq-1040--padding-vertical:0
    `,
    item: 'display:flex',
    link: `
      align-items:center
      color:blue-1000
      display:flex
      flex-grow:1
      font-weight:700
      line-height:100
      padding:400
      transition-duration:300
      transition-easing:ease
      transition-property:background-color
      &:hocus--background-color:neutral-300
      is-selected--background-color:blue-300
    `,
  },
  props: {
    selectedIndex: Number,
  },
  created() {
    this.navItems = [
      'Dashboard',
      'Search',
      'Bookings',
      'Job board',
      'How to guide',
    ];
  },
};
</script>

<template>
  <ul v-bind:class="styles.root">
    <li
      v-for="(item, index) in navItems"
      v-bind:class="styles.item"
      v-bind:key="item"
    >
      <a
        v-bind:aria-current="selectedIndex === index"
        v-bind:class="[styles.link, selectedIndex === index && states.isSelected]"
        v-bind:href="`#${item}`"
      >
        {{ item }}
      </a>
    </li>
  </ul>
</template>
