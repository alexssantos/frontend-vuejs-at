<template>
	<div class="container">
		<h1>DETALHES DO PRODUTO</h1>
		<CardProduct :cardData="card" />
	</div>
</template>

<script>
import CardProduct from "./CardProduct";

export default {
name: "Details",
	components: {
		CardProduct
	},
	props: {},
	data() {
		return {
			"card": {				
					"id":0,
					"nome": "Cake",
					"preco": 279,
					"categoria": "Doce",
					"icon": "cake",
				}
		}
	},	
	methods: {
		criarProduto(){
			console.log("Produto Criado");			
		},		
	}
}
</script>

<style>

</style>