<template>
  <div class="home">
    <br>
    <button v-on:click="getData()" id="button">Show all transfers</button>
    <br>
    <br>
    <table id="table" border="1">
      <tr>
        <th>Transaction ID</th>
        <th>Account From</th>
        <th>Account To</th>
        <th>Account Sum</th>
        <th>Account Type</th>
        <th>Account TimeStamp</th>
      </tr>
      <tr v-for="row in transactions">
        <td>{{ row.transactionID }}</td>
        <td>{{ row.accountFrom }}</td>
        <td>{{ row.accountTo }}</td>
        <td>{{ row.sum }}</td>
        <td>{{ row.typeName }}</td>
        <td>{{ row.datetime }}</td>
      </tr>
    </table>
    <p>
      {{answer}}
    </p>
  </div>
</template>

<script>

let getData = function () {
  this.answer = "";
  this.accounts = [];
    this.$http.get('http://localhost:8080/solutions/bank/alltransactions')
        .then(response => this.transactions = response.data)
        .catch(error => this.answer = error.response.data.message);
}

export default {
  name: 'Alltransfers',
  components: {},

  data: function () {
    return {
      transactions: [],
      answer: ''
    }
  },

  methods: {
    getData: getData
  }
}
</script>
