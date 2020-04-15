<template>
	<div class="col-12 my-auto">
		<div
			class="row m-3 d-flex justify-content-between align-items-center"
			v-if="isCreatePage()"
		>
			<p class="m-0">ID:</p>
			<b-form-input
				class="w-75"
				v-model="cardData.id"
				disabled
			></b-form-input>
		</div>
		<div class="row m-3 d-flex justify-content-between align-items-center">
			<p class="m-0">Nome:</p>
			<b-form-input
				class="w-75"
				id="input1"
				v-model="cardData.nome"
				:state="checkNomeForm()"
				placeholder="Digite um nome"
			></b-form-input>
		</div>
		<div class="row m-3 d-flex justify-content-between align-items-center">
			<p class="m-0">Preço (R$):</p>
			<b-form-input
				class="w-75"
				id="input2"
				v-model="cardData.preco"
				type="number"
				:state="checkPrecoForm()"
				placeholder="Digite um Preço (R$)"
			></b-form-input>
		</div>
		<div class="row m-3 d-flex justify-content-between align-items-center">
			<p class="m-0">Tipo:</p>
			<b-form-radio
				aria-selected=""
				class="ml-3"
				v-model="cardData.tipoProduto"
				name="radios-comida"
				value="comida"
				>Comida</b-form-radio
			>
			<b-form-radio
				class="ml-3"
				v-model="cardData.tipoProduto"
				name="radios-bebida"
				value="bebida"
				>Bebida</b-form-radio
			>
			<b-form-radio
				class="ml-3"
				v-model="cardData.tipoProduto"
				name="radios-outros"
				value="outros"
				>Outros</b-form-radio
			>
		</div>
		<div class="row m-3">
			<b-form-select
				class="col-3 mr-3"
				v-model="selectedLetter"
				:options="optoinsAlfabeth"
				v-on:change="getListImages()"
			>
			</b-form-select>
			<b-form-select
				class="col-8"
				v-model="selected"
				:options="options"
				:state="checkImageForm()"
				v-on:change="selectImg()"
			>
			</b-form-select>
		</div>
		<button 
			v-if="!isCreatePage()"
			class="btn btn-outline-primary btn-lg m-3"
			type="button"
			@click="salvarEdicaoProduto()"
		>
			SALVAR
		</button>
		<button
			v-if="!isCreatePage()"
			class="btn btn-outline-secondary btn-lg m-3"
			type="button"
			@click="goToDetails()"
		>
			CANCELAR
		</button>
	</div>
</template>

<script>
export default {
	name: "Edit",
	components: {},
	props: ["id", "cardData"],
	data() {
		return {
			selectDefault: { value: null, text: " --- " },
			selectedLetter: null,
			optoinsAlfabeth: [this.selectDefault],
			selected: null,
			options: [this.selectDefault]
		};
	},
	methods: {
		init() {
			this.getAlphabetArray();
			this.getListImages();
		},
		getAlphabetArray() {
			let alphabet = [
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
				"g",
				"h",
				"i",
				"j",
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q",
				"r",
				"s",
				"t",
				"u",
				"v",
				"w",
				"x",
				"y",
				"z"
			];

			this.optoinsAlfabeth = [];
			alphabet.map(char => {
				this.optoinsAlfabeth.push({
					value: char,
					text: char
				});
			});
		},
		getListImages() {
			if (!this.selectedLetter) {
				this.selectedLetter = "a";
			}

			let opts = this.$store.getters.getImagesProdutoByLetter(
				this.selectedLetter
			);

			let newOptions = opts.map(opt => {
				return { value: opt, text: opt };
			});
			this.options = [...newOptions];
			this.selected = "";
		},
		selectImg() {
			if (!this.selected) return;

			this.cardData.icon = this.selected;
		},
		goToDetails() {
			this.goToPage("product", { id: this.cardData.id });
		},
		goToPage(page, paramsObj) {
			this.$router.push({
				name: page,
				params: paramsObj
			});
		},
		isCreatePage(){
			return this.$route.name == 'create';
		},
		getProduto() {
			let produto = this.$store.getters.getProdutoById(this.id);
			return produto;
		},
		salvarEdicaoProduto() {
			if (!this.isValidateForm()) {
				alert("Preencha todos os campos corretamente!");
				return;
			}

			var toEdit = confirm(
				`Tem certeza que deseja salvar o Produto: \n
				id: ${this.cardData.id}
				nome: ${this.cardData.nome}
				preco: ${this.cardData.preco}
				tipoProduto: ${this.cardData.tipoProduto}
				icon: ${this.cardData.icon}`
			);

			if (!toEdit) return;

			this.goToDetails();
		},
		checkNomeForm() {
			return this.cardData.nome != "" && this.cardData.nome.length > 0;
		},
		checkPrecoForm() {
			return this.cardData.preco > 0;
		},
		checkImageForm() {
			return this.selected != null && this.selected != "";
		},
		isValidateForm() {
			return (
				this.checkNomeForm() &&
				this.checkPrecoForm() &&
				this.checkImageForm()
			);
		}
	},
	created() {
		this.init();
	}
};
</script>

<style></style>
