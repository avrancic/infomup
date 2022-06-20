import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
/*
function toggleInfo(infoId,mode) {
    var info = document.getElementById(infoId);
    if(info != null){
      if(info.clientHeight == 0 && mode != 0){
        info.style = "height:auto";  
          var visina = info.clientHeight;
          info.style = "height:0";  
          requestAnimationFrame(function(){
            info.style = "height:"+visina+"px";
          })
          
      }else{if(mode != 1){
           info.style = "height:0";
      }
    }
  }
}*/

