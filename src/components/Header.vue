<template>
	<div id="header">
		<b-navbar toggleable="lg">
			<b-navbar-brand :to="{ name: 'home' }">
				<i class="fas fa-store"></i>
				Market Food
			</b-navbar-brand>			

			<b-navbar-nav>
				<button
					class="btn btn-outline-secondary mx-2 my-2 my-sm-0"
					type="button"
					@click="goToHome()"
				>
					<i class="fas fa-home my-auto mx-2"></i>
				</button>
				<button
					class="btn btn-outline-secondary mx-2 my-2 my-sm-0"
					type="button"
					@click="createProduct()"
				>
					<i class="fas fa-plus my-auto mx-2"></i>
					Criar Produto
				</button>
			</b-navbar-nav>

			<div class="row ml-auto">
				<button
					class="btn btn-outline-secondary mx-3 my-2 my-sm-0 btn-cart"
					type="button"
				>
					<i class="fas fa-shopping-cart my-auto mr-2">
					</i>
						{{ totalCarrinho }}
				</button>
			</div>
		</b-navbar>
	</div>
</template>

<script>

import {mapGetters} from 'vuex';

// WARNING: Component Fora do Router-View
export default {
	name: "Header",
	data() {
		return {}
	},
	methods: {
		goToHome() {
			if (this.checkIsHomePage()) return;

			this.$router.push({ name: "home" });
		},
		createProduct() {
			// WARNING: obj $router dando ruim direto no template
			this.$router.push({ name: "create" });
		},
		checkIsHomePage() {
			return this.$route.name == "home";
		}
	},
	computed: mapGetters({
		totalCarrinho: 'getTotalCarrinho'
	}),
};
</script>

<style scoped>
#header {
	background-color: #fed4d7;
	overflow: hidden;
}
h3 {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.btn:hover {
	background-color: #f5758a !important;
	border-color: #cf6576;
}
</style>
