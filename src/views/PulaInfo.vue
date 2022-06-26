<template>
  <div class="pula">
    <div class="cityTitle" id="PulaTitle">
      <img class="cityBig" src="../assets/PulaSmall.png" />
    </div>

    <div style="width: 800px; margin: 0 auto">
      <h1>PP Pula</h1>
      <br />
      <h2>
        Trg Republike 1, Pula 52 100<br />
        Telefon: 052/532 629<br />
        Telefaks: 052/532 303<br />
        e-mail: pp.pula@mup.hr<br />
      </h2>
      <div class="redomat">
        <h2>Redomat</h2>
        <table class="tg" id="table">
          <thead>
            <tr>
              <th class="tg-0lax"></th>
              <th class="tg-0lax">OI,<br />Putovnica,<br />Prijavništvo</th>
              <th class="tg-0lax">Stranci</th>
              <th class="tg-0lax">Oružje</th>
              <th class="tg-0lax">Vozačke<br />dozvole,<br />registracije</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">Redni broj:</td>
              <td class="tg-0lax">{{ A1 }}</td>
              <td class="tg-0lax">{{ A2 }}</td>
              <td class="tg-0lax">{{ A3 }}</td>
              <td class="tg-0lax">{{ A4 }}</td>
            </tr>
            <tr>
              <td class="tg-0lax">Broj šaltera</td>
              <td class="tg-0lax">{{ B1 }}</td>
              <td class="tg-0lax">{{ B2 }}</td>
              <td class="tg-0lax">{{ B3 }}</td>
              <td class="tg-0lax">{{ B4 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="infoDiv">
        <h2>voditeljica</h2>
        <h3>052/532 577</h3>
      </div>
      <div class="infoDiv">
        <h2>osobne iskaznice, putovnice, prebivalište i boravište</h2>
        <h3>TEL: 052/532 560</h3>

        <h4>Osobne iskaznice:&nbsp;</h4>
        <a href="https://mup.gov.hr/osobna-iskaznica-eoi/328" target="_blank">
          <h4>informacije</h4>
        </a>
        <h4>,&nbsp;</h4>
        <a
          href="https://mup.gov.hr/UserDocsImages//topvijesti/svibanj//osobna.pdf"
          target="_blank"
        >
          <h4>uplatnice</h4>
        </a>
        <br /><br />

        <h4>Putovnice:&nbsp;</h4>
        <a href="https://mup.gov.hr/putovnica-330/330" target="_blank">
          <h4>informacije</h4> </a
        ><br /><br />
        <h4>Prebivalište - boravište:&nbsp;</h4>
        <a
          href="https://mup.gov.hr/prebivaliste-boraviste-329/329"
          target="_blank"
        >
          <h4>informacije</h4> </a
        ><br /><br />
      </div>
      <div class="infoDiv">
        <h2>stranci</h2>
        <h3>TEL: 052/532 596</h3>
        <a
          href="https://mup.gov.hr/gradjani-281562/moji-dokumenti-281563/stranci-333/drzavljani-trecih-zemalja/281820"
          target="_blank"
        >
          <h4>Informacije o strancima</h4>
        </a>
      </div>
      <div class="infoDiv">
        <h2>oružje</h2>
        <h3>TEL: 052/532 589</h3>
        <a href="https://mup.gov.hr/oruzje-327/327" target="_blank">
          <h4>Informacije o oružju</h4>
        </a>
      </div>
      <div class="infoDiv">
        <h2>državljanstvo</h2>
        <h3>TEL: 052/532 595</h3>
        <a href="https://mup.gov.hr/drzavljanstvo-325/325" target="_blank">
          <h4>Informacije o državljanstvu</h4>
        </a>
      </div>
      <div class="infoDiv">
        <h2>prometne isprave (registracija vozila)</h2>
        <h3>TEL: 052/532 585</h3>
        <a
          href="https://mup.gov.hr/registracija-vozila-331/331"
          target="_blank"
        >
          <h4>Informacije o registraciji vozila</h4>
        </a>
      </div>
      <div class="infoDiv">
        <h2>vozačke dozvole</h2>
        <h3>TEL: 052/532 581</h3>
        <a href="https://mup.gov.hr/vozacka-dozvola-332/332" target="_blank">
          <h4>Informacije o vozačkim dozvolama</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  docs,
} from "firebase/firestore/lite";

export default {
  data() {
    return {
      A1: "Loading...",
      A2: "Loading...",
      A3: "Loading...",
      A4: "Loading...",
      B1: "Loading...",
      B2: "Loading...",
      B3: "Loading...",
      B4: "Loading...",
    };
  },
  name: "HomeView",
  async created() {
    const docRef = collection(db, "Pula");

    const docSnap = await getDocs(docRef);

    docSnap.forEach((doc) => {
      switch (doc.id) {
        case "1":
          this.A1 = doc.data()["redni_broj"];
          this.B1 = doc.data()["broj_saltera"];
          break;
        case "2":
          this.A2 = doc.data()["redni_broj"];
          this.B2 = doc.data()["broj_saltera"];
          break;
        case "3":
          this.A3 = doc.data()["redni_broj"];
          this.B3 = doc.data()["broj_saltera"];
          break;
        case "4":
          this.A4 = doc.data()["redni_broj"];
          this.B4 = doc.data()["broj_saltera"];
          break;
      }
    });
  },
};
</script>

<style scoped>
.redomat {
  background: #d9d9d9;
  padding: 20px;
  margin: 16px;
  display: inline-block;
  width: 100%;
}
table {
  width: 100%;
}
</style>