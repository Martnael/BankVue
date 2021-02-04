<template>
  <div class="home">
    <br>
    <button v-on:click="getData()" id="button">Show all accounts</button>
    <br>
    <br>
    <table id="table" border="1">
      <tr>
        <th>ID</th>
        <th>Account name</th>
        <th>Account owner name</th>
        <th>Balance</th>
      </tr>
      <tr v-for="row in accounts">
        <td>{{row.id}}</td>
        <td>{{row.accountNumber}}</td>
        <td>{{row.owner}}</td>
        <td>{{row.accountBalance}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

let getData = function () {
  this.$http.get('http://localhost:8080/solutions/bank/allaccounts')
      .then(response => this.accounts = response.data)
}

export default {
  name: 'Allaccounts',
  components: {},

  data: function () {
    return {
      accounts: []
    }
  },

  methods: {
    getData: getData
  },
}
</script>
