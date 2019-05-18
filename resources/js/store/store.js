import Vue from 'vue';
import Vuex from 'vuex'
import axios, * as others from "axios";
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        hello:"WORLD",
        // daaatt:null,
    },
    mutations: {
        getdata(state, payload) {
            state.daaatt = payload
        },
       






    },
    actions: {
      getdata({commit}){
          console.log("Lllkskdksdkskdksdkskdks")
          commit('getdata','hellowolrd')
      }
       
    },

    getters: {
        // getBalance(state) {
        //     return state.datauser
        // },
     
    }

})