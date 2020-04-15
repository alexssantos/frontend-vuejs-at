<template>
	<div class="container">
		<h1>CRIAR PRODUTO</h1>			

		<div class="row">
			<div class="col-6">
				<CardProduct :cardData="card" />
			</div>		
			<div class="col-6 my-auto">
				<Edit :cardData="card" ref="editComponent"></Edit>
			</div>
		</div>
		<div class="row justify-content-center">
			<button				
				class="btn btn-outline-primary btn-lg m-3"
				type="button"
				@click="criarProduto()"
			>
				SALVAR
			</button>		
		</div>
	</div>
</template>

<script>
import CardProduct from "./CardProduct.vue";
import Edit from "./Edit.vue";

export default {
	name: "Create",
	components: {
		CardProduct,
		Edit
	},
	props: {},
	data() {
		return {
			card: {
				id: "",
				nome: "",
				preco: 0,
				tipoProduto: "comida",
				icon: "apple",
				categoria: "",
			}
		};
	},
	methods: {
		init(){			
			this.getIdProduto();			
		},
		criarProduto() {
			let isOk = this.$refs.editComponent.isValidateForm();
			if(!isOk) return;

			console.log("Produto Criado");
			
			this.$store.commit("addProduto", this.card);			
			this.goToHome();
		},				
		goToHome() {
			this.$router.push({ name: "home" });
		},		
		getIdProduto() {
			//WARNING: Getters são funções mas acessados como propriedades.			
			let id = this.$store.getters.getNewIdProduto;
			
			console.log("id: ", id);
			this.card.id = id;
		}		
	},
	mounted() {
		this.init();
	}
};
</script>

<style></style>
