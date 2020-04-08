<template>
	<div class="container">
		<h1>CRIAR PRODUTO</h1>
		<CardProduct />
	</div>
</template>

<script>
import CardProduct from "./CardProduct.vue";

export default {
	name: "Create",
	components: {
		CardProduct
	},
	props: {},
	data() {
		return {};
	},
	methods: {
		criarProduto() {
			console.log("Produto Criado");
		}
	}
};
</script>

<style></style>
