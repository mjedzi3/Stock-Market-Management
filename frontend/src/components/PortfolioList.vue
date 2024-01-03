<template>
<div class="content">
  <table class='portfolio-table'>
    <caption> YOUR Portfolio Table</caption>
    <thead>
      <tr>
        <th>Stock Name</th>
        <th>Number of Shares</th>
        <th class='action'>SELL SELECT NUMBER</th>
        <th class='action'>SELL ALL SHARES</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.stock_id">
        <td>{{item.stock_name}}</td>
        <td>{{item.number_shares}}</td>
        <td>
          <router-link
            :to="{name:'Sell', params:{id:item.stock_id}}"
            class='edit-btn'>
            SELL
          </router-link>
        </td>
        <td>
          <button class='delete-btn' @click="deleteShare(item.stock_id)">
            SELL ALL
          </button>
        </td>
      </tr>
    </tbody>
    </table>
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
    this.getShares();
  },
  methods: {
    // get all stocks
    async getShares() {
      try {
        const response = await axios.get('http://localhost:1000/portfolio');
        this.items = response.data;
        console.log('Sending data...');
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
    // Delete Share
    async deleteShare(id) {
      try {
        await axios.delete(`http://localhost:1000/portfolio/${id}`);
        this.getShares(); // Recall function to display table
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
  .portfolio-table {
    width: 70%;
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
        width: 15%;
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
          background-color: #008CBA;
          color: white;
          padding: 6px 15px 6px 15px;
          border-top: 1px solid #CCCCCC;
          border-right: 1px solid #333333;
          border-bottom: 1px solid #333333;
          border-left: 1px solid #CCCCCC;
          border-radius: 5px;
          &:hover {
            background-color: #0278a0;
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
  .content {
    margin-right: 0;
    margin-left: 0;
  }

  .portfolio-table {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
