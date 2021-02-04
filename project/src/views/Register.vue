<template>
  <div class="home">
    <br>
    Firstname: <input v-model="customer.customerName" placeholder="Firstname"/> <br><br>
    Username: <input v-model="customer.userName" placeholder="Username"/><br><br>
    Social number: <input v-model="customer.socialNumber" placeholder="Socialnumber"/><br><br>
    Password: <input v-model="customer.password" placeholder="Password"/><br><br>
    <button v-on:click="saveInHtml()">Register user</button>
    <br>
    <br>
    <p>{{response.answer}}</p>
  </div>
</template>

<script>

let save = function () {
  this.response.answer = ""
  this.$http.post('http://localhost:8080/solutions/bank/createcustomer', this.customer)
      .then(response => this.response = response.data)
}

export default {

  name: 'Register',
  components: {},

  data: function () {
    return {
      customer: {},
      response: {}
    }
  },

  methods: {
    saveInHtml: save,
  }
}
</script>
