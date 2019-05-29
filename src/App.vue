<script>
import ButtonHu from './components/ButtonHu/index.vue';
import CalloutHu from './components/CalloutHu/index.vue';
import ContainerHu from './components/ContainerHu/index.vue';
import HeaderHu from './components/HeaderHu/index.vue';

export default {
  name: 'app',
  components: {
    ButtonHu,
    CalloutHu,
    ContainerHu,
    HeaderHu,
  },
};
</script>

<template>
  <div>
    <header-hu />

    <container-hu
      as="main"
      class="margin-top:500"
    >
      <callout-hu
        image="https://hireup.cdn.prismic.io/hireup/89e15301c28e6396927d85e38e9c5d5833ebab09_kyle_357-bonnie.png"
        linkHref="/"
        linkLabel="Find your connection"
        title="Disability support workers who love what you love"
      />

      <div>
        <button-hu class="margin-right:500 margin-top:500">
          Primary
        </button-hu>

        <button-hu
          class="margin-right:500 margin-top:500"
          type="secondary"
        >
          Secondary
        </button-hu>
      </div>

      <div>
        <button-hu
          class="margin-right:500 margin-top:500"
          shape="rounded"
        >
          Primary Rounded
        </button-hu>

        <button-hu
          class="margin-right:500 margin-top:500"
          shape="rounded"
          type="secondary"
        >
          Secondary Rounded
        </button-hu>
      </div>

      <div>
        <button-hu
          class="margin-right:500 margin-top:500"
          size="large"
          type="primary"
        >
          Primary Large
        </button-hu>

        <button-hu
          class="margin-right:500 margin-top:500"
          size="large"
          type="secondary"
        >
          Secondary Large
        </button-hu>
      </div>

      <div class="margin-bottom:500">
        <button-hu
          class="margin-right:500 margin-top:500"
          shape="rounded"
          size="large"
          type="primary"
        >
          Primary Large Rounded
        </button-hu>

        <button-hu
          class="margin-right:500 margin-top:500"
          shape="rounded"
          size="large"
          type="secondary"
        >
          Secondary Large Rounded
        </button-hu>
      </div>
    </container-hu>
  </div>
</template>
