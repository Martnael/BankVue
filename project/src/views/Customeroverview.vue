<template>
  <div class="home">
    <br>
    <button v-on:click="getData()" id="button">Show all custumers</button>
    <br>
    <br>
    <table id="table" border="1">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Socialnumber</th>
        <th>password</th>
      </tr>
      <tr v-for="row in customers">
        <td>{{row.id}}</td>
        <td>{{row.customerName}}</td>
        <td>{{row.userName}}</td>
        <td>{{row.socialNumber}}</td>
        <td>{{row.password}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

let getData = function () {
  this.$http.get('http://localhost:8080/solutions/bank/allcustomers')
      .then(response => this.customers = response.data)
}

export default {
  name: 'Customeroverview',
  components: {},

  data: function () {
    return {
      customers: []
    }
  },

  methods: {
    getData: getData
  },
}
</script>
