<script>
import ButtonHu from './components/ButtonHu/index.vue';
import ContainerHu from './components/ContainerHu/index.vue';
import HeaderHu from './components/HeaderHu/index.vue';

export default {
  name: 'app',
  components: {
    ButtonHu,
    ContainerHu,
    HeaderHu,
  },
};
</script>

<template>
  <div>
    <header-hu />
    <container-hu as="main">
      <div>
        <button-hu class="margin-r-500 margin-t-500">
          Primary
        </button-hu>

        <button-hu
          class="margin-r-500 margin-t-500"
          type="secondary"
        >
          Secondary
        </button-hu>
      </div>

      <div>
        <button-hu
          class="margin-r-500 margin-t-500"
          shape="rounded"
        >
          Primary Rounded
        </button-hu>

        <button-hu
          class="margin-r-500 margin-t-500"
          shape="rounded"
          type="secondary"
        >
          Secondary Rounded
        </button-hu>
      </div>

      <div>
        <button-hu
          class="margin-r-500 margin-t-500"
          size="large"
          type="primary"
        >
          Primary Large
        </button-hu>

        <button-hu
          class="margin-r-500 margin-t-500"
          size="large"
          type="secondary"
        >
          Secondary Large
        </button-hu>
      </div>

      <div>
        <button-hu
          class="margin-r-500 margin-t-500"
          shape="rounded"
          size="large"
          type="primary"
        >
          Primary Large Rounded
        </button-hu>

        <button-hu
          class="margin-r-500 margin-t-500"
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
