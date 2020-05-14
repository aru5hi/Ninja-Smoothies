<template>
  <div class="index container" v-if="smoothieNotEmpty">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <span class="card-title white-text">{{smoothie.title}} 
          <i class="material-icons" @click="deleteSmoothie(smoothie.id)">delete</i>
        </span>
        <div class="ingredients indigo-text">
          <h5>Ingridients:</h5>
          <div><span v-for="(ing,index) in smoothie.ingredients" :key="index" class="chip">{{ing}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed:{
    smoothies(){
      return this.$store.getters.getSmoothies;
    },
    smoothieNotEmpty(){
      return this.$store.state.smoothies.length>0;
    }
  },
  methods:{
    deleteSmoothie(id){
      this.$store.commit('deleteSmoothies',id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index{
      display:grid;
      grid-template-columns:1fr 1fr 1fr;
      grid-gap:30px;
      margin-top:50px;
    }
    .card-content{
      padding:0px;
    }
    .card-title{
      width:100%;
      padding:10px;
      background:#e0115f;
      text-align:center;
      margin-bottom:0px;
    }

    .ingredients{
      display: inline-block;
      padding:20px;
    }
    .material-icons{
      position:relative;
      left:40px;
      cursor:pointer;
    }
</style>
