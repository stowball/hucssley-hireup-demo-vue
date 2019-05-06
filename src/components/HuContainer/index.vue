<script>
export default {
  styles: `
    margin-h-auto
    max-width-container
    padding-h-600
  `,
  props: {
    as: {
      default: 'div',
      type: String,
    },
  },
};
</script>

<template>
  <component
    v-bind:class="styles"
    v-bind:is="as"
  >
    <slot></slot>
  </component>
</template>
