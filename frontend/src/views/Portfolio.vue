<template>
  <div>
    <PortfolioList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PortfolioList from '../components/PortfolioList.vue'; // @ is an alias to /src

@Options({
  name: 'Portfolio',
  components: {
    PortfolioList,
  },
})
export default class Index extends Vue {}
</script>
