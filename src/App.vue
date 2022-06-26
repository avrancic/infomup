<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <span v-if="showLogout"> 
        <a @click="signOutClick" href="">Logout</a>
      </span>
      <span v-else>
        <router-link to="/login">Login</router-link>
      </span>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router'

const router = useRouter()

const showLogout = ref(false)

router.beforeEach((to, from) => {
  if (to.name == "Login" || to.name == "Redomat") {
    showLogout.value = true;
  } else {
    showLogout.value = false;
  }

  return true
})

const signOutClick = () => {
  signOut(auth);
  router.push('/');
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background: #eae9e9;
}

input, select {
  background: #d9d9d9;
  border: 0;
}

button {
  background: #565050;
  color: white;
  border: 0;
}

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
  width:200px;
  height:200px;
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