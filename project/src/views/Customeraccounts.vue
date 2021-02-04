<template>
  <div class="home">
    <br>
    Firstname: <input id="id" placeholder="Customer ID"/> <br>
    <button v-on:click="getData()" id="button">Show customer accounts</button>
    <br>
    <br>
    <table id="table" border="1">
      <tr>
        <th>ID</th>
        <th>Account Number</th>
        <th>Account Balance</th>
      </tr>
      <tr v-for="row in accounts">
        <td>{{ row.id }}</td>
        <td>{{ row.accountNumber }}</td>
        <td>{{ row.accountBalance }}</td>
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
  let fillCheck = document.getElementById("id").value.length;
  if (fillCheck == 0) {
    this.answer = "Please fill the fields"
  } else {
    this.$http.get('http://localhost:8080/solutions/bank/customeraccounts?id=' + document.getElementById("id").value)
        .then(response => this.accounts = response.data)
        .catch(error => this.answer = error.response.data.message);
  }
}

export default {
  name: 'Customeraccounts',
  components: {},

  data: function () {
    return {
      accounts: [],
      answer: ''
    }
  },

  methods: {
    getData: getData
  }
}
</script>
