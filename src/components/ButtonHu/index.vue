<script>
export default {
  styles: {
    button: {
      base: `
        font-weight:700
        transition-duration:100
        transition-easing:ease
        transition-property:all
        &:hocus--scale:105
      `,
      type: {
        primary: `
          background-color:blue-1000
          color:neutral-0
          &:hocus--background-color:blue-600
        `,
        secondary: `
          background-color:blue-300
          &:hocus--background-color:blue-400
        `,
      },
      shape: {
        rounded: 'border-radius:1000',
        square: 'border-radius:300',
      },
      size: {
        medium: `
          padding-horizontal:400
          padding-vertical:300
        `,
        large: `
          font-size:600
          padding-horizontal:500
          padding-vertical:400
        `,
      },
    },
    span: `
      display:inline-block
      margin-bottom:50
    `,
  },
  props: {
    href: String,
    shape: {
      default: 'square',
      type: String,
    },
    size: {
      default: 'medium',
      type: String,
    },
    type: {
      default: 'primary',
      type: String,
    },
  },
};
</script>

<template>
  <component
    v-bind:class="[
      styles.button.base,
      styles.button.shape[shape],
      styles.button.size[size],
      styles.button.type[type],
    ]"
    v-bind:href="href"
    v-bind:is="href ? 'a' : 'button'"
  >
    <span v-bind:class="styles.span">
      <slot></slot>
    </span>
  </component>
</template>
