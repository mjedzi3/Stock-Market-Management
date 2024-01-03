<template>
  <div>
    <AddStock />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AddStock from '../components/AddStock.vue'; // @ is an alias to /src

@Options({
  name: 'Add',
  components: {
    AddStock,
  },
})
export default class Index extends Vue {}
</script>
