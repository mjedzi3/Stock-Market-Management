<template>
  <div>
    <BuyShare />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BuyShare from '../components/BuyShare.vue'; // @ is an alias to /src

@Options({
  name: 'Buy',
  components: {
    BuyShare,
  },
})
export default class Index extends Vue {}
</script>
