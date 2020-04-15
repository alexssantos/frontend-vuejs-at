<template>
	<div class="wrapper m-4">
		<div class="container px-0">
			<div class="top">			
				<img
					class="img-card"
					:src="getImgUrl()"
					alt=""
				/>
			</div>
			<div class="bottom">
				<div class="left">
					<div class="details m-auto p-0" :class="makeSimpleCardProduct() ? 'w-100' : ''">
						<h2 class="m-0 p-0">{{ cardData.nome ? cardData.nome : "---" }}</h2>
						<p class="m-0 p-0">R$ {{ cardData.preco ? cardData.preco : "---" }}</p>
					</div>
					<div v-if="!makeSimpleCardProduct()" class="buy" @click="adicionarItem()">
						<i class="fas fa-cart-plus"></i>
					</div>
				</div>
			</div>
		</div>
		<div v-if="!makeSimpleCardProduct()" class="inside">
			<div class="icon" @click="verDetalhes()">
				<i class="fas fa-info-circle"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CardProduct",
	props: ['cardData'],
	data() {
		return {};
	},
	methods: {
		verDetalhes() {
			if (this.cardData.id < 0) return;

			//this.$emit("verDetalhes", this.cardData.id);			
			this.$router.push({
				name: 'product', 	
				params: { 
					id: this.cardData.id, 
					cardData: this.cardData 
				}
			});
		},
		adicionarItem(){
			this.$emit("adicionaProd");
			console.log("adicionar Item: +1");
			this.$store.commit('addProdutoToCart', this.cardData.id);
		},
		getImgUrl(){			
			let img = require(`@/assets/img/foods/svg/${this.cardData.icon}.svg`);
			return img;
		},
		makeSimpleCardProduct(){
			let page = this.$route.name;
			return (page == 'product') || (page == 'productEdit') || (page == 'create');
		}
	}
};
</script>

<style>
.wrapper {
	width: 300px;
	height: 500px;
	background: white;
	margin: auto;
	position: relative;
	overflow: hidden;
	border-radius: 10px 10px 10px 10px;
	box-shadow: 0;
	transform: scale(0.95);
	transition: box-shadow 0.5s, transform 0.5s;
	border: 1px solid rgb(202, 202, 202);
}
.wrapper:hover {
	transform: scale(1);
	box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
}
.wrapper .container {
	width: 100%;
	height: 100%;
}

/* TOP CARD */
.wrapper .container .top {
	height: 80%;
	width: 100%;
	background-size: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
}
img.img-card {
	height: 40%;
}

/* BOTTOM CARD */
.wrapper .container .bottom {
	width: 100%;
	height: 20%;
	transition: transform 0.5s;
}
.wrapper .container .bottom.clicked {
	transform: translateX(-50%);
}
.wrapper .container .bottom .left {
	height: 100%;
	width: 100%;
	background: #f4f4f4;
	position: relative;
	float: left;
}
.wrapper .container .bottom .left .details {
	padding: 10px;
	float: left;	
	height: 100%;
	width: 70%;
	/* kwidth: calc(70% - 40px); */
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
}
.wrapper .container .bottom .left .buy {
	float: right;
	width: calc(30% - 2px);
	height: 100%;
	background: #f1f1f1;
	transition: background 0.5s;
	border-left: solid thin rgba(0, 0, 0, 0.1);
}
.wrapper .container .bottom .left .buy i {
	font-size: 30px;
	padding: 30px;
	color: #254053;
	transition: transform 0.5s;
}
.wrapper .container .bottom .left .buy:hover {
	background: #a6cdde;
}
.wrapper .container .bottom .left .buy:hover i {
	transform: translateY(5px);
	color: #00394b;
}
.wrapper .inside {
	z-index: 9;
	background: #a6cdde;
	width: 140px;
	height: 140px;
	position: absolute;
	top: -70px;
	right: -70px;
	border-radius: 0px 0px 200px 200px;
	transition: all 0.5s, border-radius 2s, top 1s;
	overflow: hidden;
}
.wrapper .inside .icon {
	position: absolute;
	right: 85px;
	top: 85px;
	color: white;
	opacity: 1;
}
.wrapper .inside:hover .icon {
	transform: scale(1.5);
	transition: transform 0.3s ease-in-out;
}
</style>

// https://codepen.io/olhilton/pen/dXaqxE