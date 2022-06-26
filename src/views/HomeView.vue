<template>
  <div class="home">
  <div style = "padding:24px;background-color:lightgray">
      <h1>Dobrodošli na stranice PU Istarske </h1>
      <h2>Odaberite svoj grad</h2>
  </div>

  <div style = "width:800px; margin: 0  auto;">
 
    <div>
      <div name = "Rovinj" style = "float:left;padding:24px;"> 
        <router-link to="/rovinj">
          <img class = "citySmall" src = "../assets/RovinjSmall.png">
          <h3 class = "citySmallText">Rovinj</h3>
        </router-link>
      </div>
      <div name = "Labin" style = "float:right;padding:24px;"> 
        <router-link to="/labin">
          <img class = "citySmall" src = "../assets/LabinSmall.png">
          <h3 class = "citySmallText">Labin</h3>
        </router-link>
      </div>
    </div>
    <div name = "Pula" style = "width:100%;padding:200px 24px 12px 24px;"> 
     <router-link to="/pula">
        <img class = "cityBig" src = "../assets/PulaSmall.png">
        <h2 class = "cityBigText">Pula</h2>
        </router-link>
        
    </div>
    <div style="margin-top: -150px">
      <div name = "Pazin" style = "float:left;padding:24px"> 
        <router-link to="/pazin">
          <img class = "citySmall" src = "../assets/PazinSmall.png">
          <h2 class = "citySmallText">Pazin</h2>
        </router-link>
      </div>
      <div name = "Umag" style = "float:right;padding:24px;"> 
        <router-link to="/umag">
          <img class = "citySmall" src = "../assets/UmagSmall.png">
          <h3 class = "citySmallText">Umag</h3>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>