<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
};
</script>

<template>
  <svg
    class="
      display:inline-block
      pointer-events:none
      svg-fill-color:current
      svg-fill-rule:even-odd
      vertical-align:bottom
    "
    focusable="false"
    role="img"
  >
    <use v-bind:xlink:href="`#${name}`" />
  </svg>
</template>
