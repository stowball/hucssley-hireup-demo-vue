<script>
import HuContainer from './components/HuContainer/index.vue';
import HuHeader from './components/HuHeader/index.vue';
import HuButton from './components/HuButton/index.vue';

export default {
  name: 'app',
  components: {
    HuContainer,
    HuHeader,
    HuButton,
  },
};
</script>

<template>
  <div>
    <hu-header />
    <hu-container as="main">
      <div>
        <hu-button class="margin-r-500 margin-t-500">
          Primary
        </hu-button>

        <hu-button
          class="margin-r-500 margin-t-500"
          type="secondary"
        >
          Secondary
        </hu-button>
      </div>

      <div>
        <hu-button
          class="margin-r-500 margin-t-500"
          shape="rounded"
        >
          Primary Rounded
        </hu-button>

        <hu-button
          class="margin-r-500 margin-t-500"
          shape="rounded"
          type="secondary"
        >
          Secondary Rounded
        </hu-button>
      </div>

      <div>
        <hu-button
          class="margin-r-500 margin-t-500"
          size="large"
          type="primary"
        >
          Primary Large
        </hu-button>

        <hu-button
          class="margin-r-500 margin-t-500"
          size="large"
          type="secondary"
        >
          Secondary Large
        </hu-button>
      </div>

      <div>
        <hu-button
          class="margin-r-500 margin-t-500"
          shape="rounded"
          size="large"
          type="primary"
        >
          Primary Large Rounded
        </hu-button>

        <hu-button
          class="margin-r-500 margin-t-500"
          shape="rounded"
          size="large"
          type="secondary"
        >
          Secondary Large Rounded
        </hu-button>
      </div>
    </hu-container>
  </div>
</template>
