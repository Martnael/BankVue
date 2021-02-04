<template>
  <div class="home">
    <br>
    Account to: <input v-model="transfer.accountTo" id="accountTo" placeholder="Account number To"/> <br><br>
    Account from: <input v-model="transfer.accountFrom" id="accountFrom" placeholder="Account number From"/> <br><br>
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
  let fillCheck = document.getElementById("accountTo").value.length;
  let fillCheck2 = document.getElementById("sum").value.length;
  let fillCheck3 = document.getElementById("accountFrom").value.length;
  if (fillCheck == 0 || fillCheck2 == 0 || fillCheck3 == 0) {
    this.answer = "Please fill the fields"
  } else {
    this.$http.post('http://localhost:8080/solutions/bank/transfermoney', this.transfer)
        .then(response => this.response = response.data)
        .catch(error => this.answer = error.response.data.message);
  }
}

export default {

  name: 'Depositmoney',
  components: {},

  data: function () {
    return {
      transfer: {},
      answer: "",
      response: {}
    }
  },

  methods: {
    saveInHtml: save,
  }
}
</script>