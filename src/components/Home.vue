<template>
	<div class="page">
		<button
					class="btn btn-outline-secondary btn-lg m-3"
					type="button"					
				> 
				Produtos: {{qtdCarrinho}}
		</button>
		<div class="container">
			<div class="d-flex flex-wrap justify-content-center">
				<div v-for="(card) in produtosLista" :key="card.id" >
					<CardProduct 
						@verDetalhes="detalheProduto"
						@adicionaProd="adicionaProduto"
						:cardData="card"
					/>	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CardProduct from "./CardProduct";

export default {
	name: "Home",
	components: {
		CardProduct
	},
	props: {},
	data() {
		return {
			"qtdCarrinho": 0,
			"produtosLista": [
				{
					"id":0,
					"nome": "Cake",
					"preco": 279,
					"categoria": "Doce",
					"icon": "cake",
				},{
					"id":1,
					"nome": "Apple",
					"preco": 279,
					"categoria": "Doce",
					"icon": "apple",
				},{
					"id":2,
					"nome": "Bread",
					"preco": 279,
					"categoria": "Doce",
					"icon": "bread",
				},{
					"id":3,
					"nome": "Carrot",
					"preco": 279,
					"categoria": "Doce",
					"icon": "carrot",
				},{
					"id":4,
					"nome": "Candy",
					"preco": 279,
					"categoria": "Doce",
					"icon": "candy",
				},{
					"id":5,
					"nome": "Coffee",
					"preco": 279,
					"categoria": "Doce",
					"icon": "coffee",
				},	{
					"id":6,
					"nome": "Cake",
					"preco": 279,
					"categoria": "Doce",
					"icon": "cake",
				},{
					"id":7,
					"nome": "Apple",
					"preco": 279,
					"categoria": "Doce",
					"icon": "apple",
				},{
					"id":8,
					"nome": "Bread",
					"preco": 279,
					"categoria": "Doce",
					"icon": "bread",
				},{
					"id":9,
					"nome": "Carrot",
					"preco": 279,
					"categoria": "Doce",
					"icon": "carrot",
				},{
					"id":10,
					"nome": "Candy",
					"preco": 279,
					"categoria": "Doce",
					"icon": "candy",
				},{
					"id":11,
					"nome": "Coffee",
					"preco": 279,
					"categoria": "Doce",
					"icon": "coffee",
				},
			]
		}
	},
	methods: {
		adicionaProduto(){
			console.log(" Produto add");
			this.qtdCarrinho += 1;
		},
		detalheProduto(id){
			console.log("Detalhe id", id);
			//$router.push('create')
		}
	}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
