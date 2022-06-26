<template>
  <div class="maindiv">
    <h1>Prijavi se</h1>
    <form @submit.prevent="pressed">
      <div class="login">
        <p>Korisničko ime:</p>
        <input type="text" placeholder="e-mail" v-model="email" />
      </div>
      <div class="password">
        <p>Lozinka:</p>
        <input type="password" placeholder="Lozinka" v-model="password" />
      </div>
      <button>Prijavi se</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    pressed() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          console.log(data);
          this.$router.replace({ name: "Redomat" });
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.maindiv {
  width: 400px;
  margin: 0 auto;
}

div {
  color: inherit;
}

input {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 21px;
}

button {
  width: 100%;
  height: 75px;
  font-size: 100%;
}

p {
  margin: 10px;
}

h1 {
  margin-bottom: 50px
}
.error {
  color: red;
}
</style>