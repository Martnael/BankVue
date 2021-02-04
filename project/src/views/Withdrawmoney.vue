<template>
  <div class="home">
    <br>
    Account From: <input v-model="transfer.accountFrom" id="accountFrom" placeholder="Account number"/> <br><br>
    Sum: <input v-model="transfer.sum" id="sum" placeholder="Sum"/><br><br>
    <button v-on:click="saveInHtml()">Transfer money</button>
    <br>
    <br>
    <p>
      {{answer}}
      {{response.answer}}
    </p>
  </div>
</template>

<script>

let save = function () {
  this.answer = ""
  this.response.answer = ""
  let fillCheck = document.getElementById("accountFrom").value.length;
  let fillCheck2 = document.getElementById("sum").value.length;
  if (fillCheck == 0 || fillCheck2 == 0) {
    this.answer = "Please fill the fields"
  } else {
    this.$http.put('http://localhost:8080/solutions/bank/withdrawmoney', this.transfer)
        .then(response => this.response = response.data)
        .catch(error => this.answer = error.response.data.message);
  }
}


export default {

  name: 'Withdrawmoney',
  components: {},

  data: function () {
    return {
      transfer: {},
      response: {},
      answer: ""
    }
  },

  methods: {
    saveInHtml: save,
  }
}
</script>