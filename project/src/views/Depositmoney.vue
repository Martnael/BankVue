<template>
  <div class="home">
    <br>
    Account to: <input v-model="transfer.accountTo" id="accountTo" placeholder="Account number"/> <br><br>
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
  if (fillCheck == 0 || fillCheck2 == 0) {
    this.answer = "Please fill the fields"
  } else {
    this.$http.put('http://localhost:8080/solutions/bank/depositmoney', this.transfer)
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
