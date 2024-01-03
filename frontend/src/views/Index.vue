<template>
  <div>
    <StockList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StockList from '../components/StockList.vue'; // @ is an alias to /src

@Options({
  name: 'Index',
  components: {
    StockList,
  },
})
export default class Index extends Vue {}
</script>
