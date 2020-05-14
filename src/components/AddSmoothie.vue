<template>
	<div class="new-smoothie container">
		<h4 class="indigo-text">Add new smoothies here</h4>
		<form class="container">
			<div class="field title">
			<label for="title">Smoothie Title</label>
			<input type="text" name="title" v-model="item.title">
			</div>

			<div class="field add-ingredient">
				<div v-if="ingNotEmpty">
				<b class="indigo-text">Your ingredients:</b>
				<span v-for="(ing,index) in item.ingredients" :key="index" class="chip">
					{{ing}}
				</span>
			</div>
				<label for="ingredients">Add Ingredients</label>
				<input type="text"  name="ingredients" v-model="newIngredient" @keydown.tab="addIngredient">
				<i class=" grey-text">press tab to add the ingredient</i>
			</div>
			<div class="field center-align">
				<button class="btn pink" @click="addSmoothie">Add Smoothie</button>
			</div>
		</form>	
	</div>
	
</template>

<script>
	export default{
		name:'AddSmoothie',
		data(){
			return{
				ingNotEmpty:false,
				newIngredient:'',
				item:{
					title:'',
					ingredients:[],
					id:null
				}
			}
		},
		methods:{
			ingredientCheck(){
				if(this.item.ingredients.length>0){
					this.ingNotEmpty=true;
				}
			},
			addIngredient(){
				if(!this.newIngredient){alert("Enter an Ingredient!"); return;}
				this.item.ingredients.push(this.newIngredient);
				this.ingredientCheck();
				this.newIngredient="";
			},
			addSmoothie(){
				if(!this.item.title || this.item.ingredients<1){
					alert("Add smoothie details first");

				}
				else{
				this.numberOfSmoothies()
				this.$store.commit('addSmoothie',this.item)
				this.$router.push({name:'Index'})
				 }
			},
			numberOfSmoothies(){
				this.item.id=this.$store.state.smoothies.length+1;
			}

		}
	}
</script>

<style>
	h4{
		text-align: center;
		font-weight:600;
		margin:5%;
	}
	.new-smoothie{
		margin:5% 15%;
	}
	.field{
		margin:5%;
	}

</style>