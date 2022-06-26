<template>
  <div class="maindiv">
    <h1>Redomat</h1>
    <form @submit.prevent="pressed">
      <p>Grad:</p>

      <select v-model="grad">
        <option>Labin</option>
        <option>Pazin</option>
        <option>Pula</option>
        <option>Rovinj</option>
        <option>Umag</option>
      </select>

      <p>Redni broj:</p>
      <input v-model="redni_broj" />
      <p>Broj šaltera:</p>
      <input v-model="broj_saltera" />

      <p>Vrsta dokumenta:</p>

      <select v-model="vrsta">
        <option value="1">OI, Putovnica, Prijavništvo</option>
        <option value="2">Stranci</option>
        <option value="3">Oružje</option>
        <option value="4">Vozačke dozvole, registracije</option>
      </select>

      <button>Spremi</button>
    </form>
  </div>
</template>

<script>
import { db } from "../firebase";
import { doc, runTransaction } from "firebase/firestore";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();

    return { toast };
  },
  data() {
    return {
      grad: "",
      redni_broj: "",
      broj_saltera: "",
      vrsta: "",
    };
  },
  methods: {
    async pressed() {
      try {
        const sfDocRef = doc(db, this.grad, this.vrsta);

        await runTransaction(db, async (transaction) => {
          const sfDoc = await transaction.get(sfDocRef);

          if (!sfDoc.exists()) {
            this.toast.error("Document does not exist!");
            throw "Document does not exist!";
          }

          transaction.update(sfDocRef, {
            broj_saltera: this.broj_saltera,
            redni_broj: this.redni_broj,
          });
        });

        this.grad = "";
        this.broj_saltera = "";
        this.redni_broj = "";
        this.vrsta = "";

        this.toast.success("Uspješno!");
      } catch (e) {
        this.toast.error(e.message);
      }
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

select {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 21px;
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
  margin-bottom: 50px;
}
.error {
  color: red;
}
</style>