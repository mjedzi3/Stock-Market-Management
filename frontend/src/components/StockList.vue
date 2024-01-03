<template>
<div class="content">
  <table class='stock-table'>
    <caption>Stocks Table</caption>
    <thead>
      <tr>
        <th>Stock Name</th>
        <th>Stock Value</th>
        <th class='action'>BUY SHARES</th>
        <th class='action'>UPDATE</th>
        <th class='action'>DELIST</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.stock_id">
        <td>{{item.stock_name}}</td>
        <td>${{ formatValue(item.stock_value) }}</td>
        <td>
          <router-link
            :to="{name:'Buy', params:{id:item.stock_id}}"
            class='buy-btn'>
            BUY
          </router-link>
        </td>
        <td>
          <router-link
            :to="{name:'Edit', params:{id:item.stock_id}}"
            class='edit-btn'>
            Edit
          </router-link>
        </td>
        <td>
          <button class='delete-btn' @click="deleteStock(item.stock_id)">
            DELETE
          </button>
        </td>
      </tr>
    </tbody>
    </table>
    <router-link :to="{name:'Add'}" class='add-btn'>Add Stock</router-link>
</div>
</template>

<script>
// import axios for connecting Back-end
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getStocks();
  },
  methods: {
    // get all stocks
    async getStocks() {
      try {
        const response = await axios.get('http://localhost:1000/stocks');
        this.items = response.data;
        console.log('Sending data...');
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
    // Delete Stock
    async deleteStock(id) {
      try {
        await axios.delete(`http://localhost:1000/stocks/${id}`);
        this.getStocks(); // Recall function to display table
      } catch (err) {
        console.log(err);
      }
    },
    formatValue(value) {
      const val = (value / 1).toFixed(2).replace(',', '.');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style lang="scss">
  .content {
    margin: 25px;
  }

  .add-btn {
    position: relative;
    text-decoration: none;
    font-size: 25px;
    background-color: #00678A;
    color: white;
    padding: 10px 30px 10px 30px;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
    border-left: 1px solid #CCCCCC;
    border-radius: 5px;
    &:hover {
      background-color: #0183ae;
    }
  }

  .stock-table {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    border-spacing: 0;
    border: 2px solid #45595cd5;
    caption {
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
      margin-top: 15px;
      padding: 10px;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    thead {
      border: 2px solid #45595cd5;
      th {
        text-transform: uppercase;
        text-align: center;
        padding: 10px;
        border: 1px solid #F1F1F1;
      }
      .action {
        width: 10%;
      }
    }
    tbody {
      td {
        text-transform: uppercase;
        text-align: center;
        padding: 10px;
        border: 1px solid #F1F1F1;
        .buy-btn {
          text-decoration: none;
          background-color: #00678A;
          color: white;
          padding: 6px 15px 6px 15px;
          border-top: 1px solid #CCCCCC;
          border-right: 1px solid #333333;
          border-bottom: 1px solid #333333;
          border-left: 1px solid #CCCCCC;
          border-radius: 5px;
          &:hover {
            background-color: #0183ae;
          }
        }
        .edit-btn {
          text-decoration: none;
          background-color: #3A823A;
          color: white;
          padding: 6px 15px 6px 15px;
          border-top: 1px solid #CCCCCC;
          border-right: 1px solid #333333;
          border-bottom: 1px solid #333333;
          border-left: 1px solid #CCCCCC;
          border-radius: 5px;
          &:hover {
            background-color: #4fae4f;
          }
        }
        .delete-btn {
          text-decoration: none;
          background-color: #DF1A0C;
          color: white;
          padding: 7px 10px 7px 10px;
          border-top: 1px solid #CCCCCC;
          border-right: 1px solid #333333;
          border-bottom: 1px solid #333333;
          border-left: 1px solid #CCCCCC;
          border-radius: 5px;
          &:hover {
            background-color: #ff3224;
            cursor: pointer;
          }
        }
      }
    }
  }

// MOBILE VIEW
@media only screen and (max-width: 550px) {
  .content, .stock-table {
    width: 100%;
    margin-right: 0px;
    margin-left: 0px;
  }
}
</style>
