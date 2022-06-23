<template>
  <div>
  <nav>
    <router-link to="/">Početna</router-link> |
    <router-link to="/login">Prijavi se</router-link>
  </nav>
  <router-view/>
  </div>
</template>




<style lang="scss">
.cityTitle {
  padding:24px;
}
#RovinjTitle{
  background-image: url("assets/RovinjBig.png");
  height:300px;
  background-repeat: none;
  background-size: cover;
}

.body {
  background-color: rgb(201, 201, 201);
}
.infoDiv h2{
text-transform: uppercase;
}
.infoDiv a, h4{
  display:inline;
}
.infoDiv{
  width:100%;
  background-color: rgb(228, 241, 253);
  border-radius: 16px;
  margin:16px;
  display:inline-block;
  padding:16px;
}
.citySmall{
    width:200px;
    height:200px;
    border-radius:50px;
    transition: border-radius 1s;
}
.cityBig{
  width:300px;
  height:300px;
  border-radius:100px;
  transition: border-radius 1s;
}
.citySmallText{
  text-decoration: none;
  color:white; 
  margin: -48px 0px 0px -12px; 
  text-align: center; 
  text-shadow: 0px 0px 10px #FF0000;
}
.cityBigText {
  text-decoration: none;
  color:white; 
  margin: -48px 0px 0px -24px; 
  text-align: center;
}
.citySmall:hover {
  border-radius:75px;
}
.cityBig:hover {
  border-radius:75px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
