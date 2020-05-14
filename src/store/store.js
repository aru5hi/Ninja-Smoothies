import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store=new Vuex.Store({
	state:{
		smoothies:[]
  },
  getters:{
  	getSmoothies(state){
  		return state.smoothies;
  	}
  },
  mutations:{
  	addSmoothie(state,item){
      state.smoothies.push(item);
      
      },
    deleteSmoothies(state,id){
  		state.smoothies=state.smoothies.filter(smooth=>{
        return smooth.id!=id;
    })
  	}
  }
})