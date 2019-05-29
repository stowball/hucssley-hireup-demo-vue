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
      mq-768--flex-direction-row
      mq-768--text-align-left
    `,
    imageWrapper: `
      align-items-center
      display-flex
      justify-content-center
      margin-bottom-400
      width-50
      mq-600--width-30
      mq-768--margin-bottom-0
      mq-768--margin-right-500
      mq-768--width-20
      mq-1040--width-16
    `,
    image: `
      bg-color-blue-600
      border-color-neutral-500
      border-radius-1000
      border-style-solid
      border-width-200
    `,
    title: `
      font-size-600
      font-weight-700
      line-height-200
      mq-768--font-size-800
    `,
    link: 'margin-top-400',
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
      <div v-bind:class="styles.imageWrapper">
       <img
          alt=""
          v-bind:class="styles.image"
          v-bind:src="image"
        />
      </div>
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
