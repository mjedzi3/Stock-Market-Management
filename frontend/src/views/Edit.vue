<template>
  <div>
    <EditStock />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EditStock from '../components/EditStock.vue'; // @ is an alias to /src

@Options({
  name: 'Edit',
  components: {
    EditStock,
  },
})
export default class Index extends Vue {}
</script>
