<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"><br>
    <br>
    Firstname: <input v-model="firstName" placeholder="Firstname"/>
    Lastname: <input v-model="lastName" placeholder="Lastname"/>
    <button v-on:click="saveInHtml()">Click On Me</button> <br>
  </div>
</template>

<script>

let save = function () {
  this.$http.get(('http://localhost:8080/test'))
  alert('salvesta info')
}

export default {
  name: 'Register',
  components: {
  },
  data: function () {
    return {
      firstName: "",
      lastName: ""
    }
    },

  methods : {
    saveInHtml: save
  }

}
</script>
