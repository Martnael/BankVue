<template>
  <div class="home">
    <br>
    Open Account for user: <input id="id" placeholder="User id"/> <br><br>
    <button v-on:click="saveInHtml()">Open account</button>
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
  let fillCheck = document.getElementById("id").value.length;
  if (fillCheck == 0) {
    this.answer = "Please fill the fields"
  } else {
    this.$http.post('http://localhost:8080/solutions/bank/createaccount?id=' + document.getElementById("id").value)
        .then(response => this.response = response.data)
        .catch(error => this.answer = error.response.data.message);
  }
}

export default {

  name: 'Openaccount',
  components: {},

  data: function () {
    return {
      response: {},
      answer: ""
    }
  },

  methods: {
    saveInHtml: save,
  }
}
</script>