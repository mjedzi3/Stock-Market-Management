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
            v-model="stockName"/>
        </div>
      </label>
    </div>

    <div class='field'>
      <label for="input" class='label'>
        Stock Value
        <div class='control'>
          <input
            type="text"
            class="input"
            placeholder="Stock Value"
            v-model="stockValue"/>
        </div>
      </label>
    </div>

    <div class='control'>
      <button class='update-btn' @click="updateStock">UPDATE</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      stockName: '',
      stockValue: '',
    };
  },
  created() {
    this.getStockById();
  },
  methods: {
    // This func will automatically run to display the original values of this stock
    async getStockById() {
      try {
        const response = await axios.get(`http://localhost:1000/stocks/${this.$route.params.id}`);
        this.stockName = response.data.stock_name;
        this.stockValue = response.data.stock_value;
      } catch (err) {
        console.log(err);
      }
    },
    // Update Stock: action for button click
    async updateStock() {
      try {
        await axios.put(
          `http://localhost:1000/stocks/${this.$route.params.id}`,
          {
            stock_name: this.stockName,
            stock_value: this.stockValue,
          },
        );
        this.stockName = '';
        this.stockValue = '';
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
  label {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    padding: 10px;
  }

  input[type=text] {
  width: 30%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
}

  input[type=text]:focus {
    width: 50%;
  }

  .update-btn {
    text-decoration: none;
    font-size: 25px;
    background-color: #4BB543;
    color: white;
    padding: 6px 25px 6px 25px;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
    border-left: 1px solid #CCCCCC;
    border-radius: 5px;
    &:hover {
      background-color: #3e9437;
    }
  }
</style>
