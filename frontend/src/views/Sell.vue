<template>
  <div>
    <SellShare />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SellShare from '../components/SellShare.vue'; // @ is an alias to /src

@Options({
  name: 'Sell',
  components: {
    SellShare,
  },
})
export default class Index extends Vue {}
</script>
