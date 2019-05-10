<script>
export default {
  styles: {
    button: {
      base: `
        font-weight-700
        transition-duration-100
        transition-easing-ease
        transition-property-all
        hocus--scale-105
      `,
      type: {
        primary: `
          bg-color-blue-1000
          color-neutral-0
          hocus--bg-color-blue-600
        `,
        secondary: `
          bg-color-blue-300
          hocus--bg-color-blue-400
        `,
      },
      shape: {
        rounded: 'border-radius-1000',
        square: 'border-radius-300',
      },
      size: {
        medium: `
          padding-h-400
          padding-v-300
        `,
        large: `
          font-size-600
          padding-h-500
          padding-v-400
        `,
      },
    },
    span: `
      display-inline-block
      margin-b-50
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
