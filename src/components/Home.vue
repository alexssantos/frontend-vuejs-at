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
import { mapGetters } from 'vuex';

export default {
	name: "Home",
	components: {
		CardProduct
	},
	props: {},
	computed: mapGetters({
		produtosLista: 'getProdutos'
	}),
	//computed: mapGetters(['getProdutos']),
	data() {
		return {
			"qtdCarrinho": 0			
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
