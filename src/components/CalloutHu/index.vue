<script>
import ButtonHu from '../ButtonHu/index.vue';

export default {
  styles: {
    root: `
      bg-color-blue-100
      padding-500
    `,
    callout: `
      align-items-center
      bg-color-neutral-0
      border-color-neutral-500
      border-radius-500
      border-style-solid
      border-width-100
      display-flex
      flex-direction-column
      padding-500
      text-align-center
      bp-768--flex-direction-row
      bp-768--text-align-left
    `,
    image: `
      bg-color-blue-600
      border-color-neutral-500
      border-radius-1000
      border-style-solid
      border-width-200
      margin-b-400
      width-50
      bp-600--width-30
      bp-768--margin-b-0
      bp-768--margin-r-500
      bp-768--width-20
      bp-1040--width-16
    `,
    title: `
      font-size-600
      font-weight-700
      line-height-200
      bp-768--font-size-800
    `,
    link: 'margin-t-400',
  },
  components: {
    ButtonHu,
  },
  props: {
    image: {
      required: true,
      type: String,
    },
    linkHref: String,
    linkLabel: String,
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<template>
  <div v-bind:class="styles.root">
    <div v-bind:class="styles.callout">
     <img
        alt=""
        v-bind:class="styles.image"
        v-bind:src="image"
      />
      <div>
        <p v-bind:class="styles.title">
          {{ title }}
        </p>
        <button-hu
          shape="rounded"
          v-bind:class="styles.link"
          v-bind:href="linkHref"
          v-if="linkHref && linkLabel"
        >
          {{ linkLabel }}
        </button-hu>
      </div>
    </div>
  </div>
</template>
