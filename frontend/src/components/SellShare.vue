<template>
  <div class="content">
    <div class='field'>
      <label for="input" class='label'>
        Stock Name
        <div class='control'>
          <input
            type="text"
            class="input"
            placeholder="Stock Name"
            v-model="stockName"
            disabled/>
        </div>
      </label>
    </div>

    <div class='field'>
      <label for="input" class='label'>
        Number of Shares
        <div class='control'>
          <input
            type="range"
            min= "0"
            class="input"
            id="rangeInput"
            oninput="this.nextElementSibling.value = this.value"
            v-model="numShare"/>
            <output></output>
        </div>
      </label>
    </div>

    <div class='control'>
      <button class='update-btn' @click="updateShare">UPDATE</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      stockName: '',
      numShare: '',
      prevShare: '',
    };
  },
  created() {
    this.getShareById();
  },
  methods: {
    // This func will automatically run to display the original values of this stock
    async getShareById() {
      try {
        const response = await axios.get(`http://localhost:1000/portfolio/${this.$route.params.id}`);
        this.stockName = response.data.stock_name;
        this.prevShare = response.data.number_shares;
        // Add the preShare to the rangeInput element
        const ranInput = document.getElementById('rangeInput');
        ranInput.setAttribute('max', this.prevShare - 1);
        console.log(this.prevShare);
      } catch (err) {
        console.log(err);
      }
    },
    // Update Stock: action for button click
    async updateShare() {
      try {
        await axios.put(
          `http://localhost:1000/portfolio/${this.$route.params.id}`,
          {
            stock_name: this.stockName,
            number_shares: Number(this.prevShare) - Number(this.numShare),
          },
        );
        this.stockName = '';
        this.numShare = '';
        this.prevShare = '';
        this.$router.push('/portfolio');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>

</style>
