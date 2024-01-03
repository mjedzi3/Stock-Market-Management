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
            type="text"
            class="input"
            placeholder="Number of Shares"
            v-model="numShare"/>
        </div>
      </label>
    </div>

    <div class='control'>
      <button class='save-btn' @click="confirmTrade">Confirm</button>
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
        if (response.data.number_shares === undefined) {
          // NEW BUY
          const response2 = await axios.get(`http://localhost:1000/stocks/${this.$route.params.id}`);
          this.stockName = response2.data.stock_name;
          this.prevShare = undefined;
        } else {
          // ALREADY PURCHASED
          this.stockName = response.data.stock_name;
          this.prevShare = response.data.number_shares;
        }
        console.log(response.data.number_shares);
      } catch (err) {
        console.log(err);
      }
    },
    async confirmTrade() {
      if (this.prevShare === undefined) {
        // CASE: ADDING NEW SHARES TO TABLE
        try {
          await axios.post('http://localhost:1000/portfolio', {
            stock_id: this.$route.params.id,
            stock_name: this.stockName,
            number_shares: this.numShare,
          });
          this.stockName = '';
          this.numShare = '';
          this.prevShare = '';
          this.$router.push('/portfolio');
        } catch (err) {
          console.log(err);
        }
      } else {
        // ELSE: UPDATING EXISTING SHARES
        try {
          await axios.put(
            `http://localhost:1000/portfolio/${this.$route.params.id}`,
            {
              stock_name: this.stockName,
              number_shares: Number(this.numShare) + Number(this.prevShare),
            },
          );
          this.stockName = '';
          this.numShare = '';
          this.prevShare = '';
          this.$router.push('/portfolio');
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

<style lang="scss">

</style>
