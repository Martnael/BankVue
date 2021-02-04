<template>
  <div id="app">
    <div id="nav">
      <router-link to="/register">Register Customer</router-link> |
      <router-link to="/customeroverview">Customer overview</router-link> |
      <router-link to="/openaccount">Open Account</router-link> |
      <router-link to="/allaccounts">All Accounts</router-link> |
      <router-link to="/customeraccounts">Customer accounts</router-link> <br>
      <router-link to="/depositmoney">Deposit money</router-link> |
      <router-link to="/withdrawmoney">Withdraw money</router-link> |
      <router-link to="/transfermoney">Transfer money</router-link> | <br>
      <router-link to="/alltransfers">All transfers</router-link> |
      <router-link to="/transfersbyaccount">Transfers by Account</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border: 2px solid #4CAF50;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: black
}

table {
  border-collapse: collapse;
  width: 100%;
}
th {
  background-color: #4CAF50;
  font-weight: bold;
}
tr, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
