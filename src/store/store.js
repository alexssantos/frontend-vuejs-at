import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		produtos: [
			{
				"id": 0,
				"nome": "Cake",
				"preco": 279,
				"categoria": "Doce",
				"icon": "cake",
				"tipoProduto":"comida",
			}, {
				"id": 1,
				"nome": "Apple",
				"preco": 279,
				"categoria": "Doce",
				"icon": "apple",
				"tipoProduto":"comida",
			}, {
				"id": 2,
				"nome": "Bread",
				"preco": 279,
				"categoria": "Doce",
				"icon": "bread",
				"tipoProduto":"comida",
			}, {
				"id": 3,
				"nome": "Carrot",
				"preco": 279,
				"categoria": "Doce",
				"icon": "carrot",
				"tipoProduto":"comida",
			}, {
				"id": 4,
				"nome": "Candy",
				"preco": 279,
				"categoria": "Doce",
				"icon": "candy",
				"tipoProduto":"comida",
			}, {
				"id": 5,
				"nome": "Coffee",
				"preco": 279,
				"categoria": "Doce",
				"icon": "coffee",
				"tipoProduto":"bebida",
			},
		],
		carrinho: [
			{
				produtoId: 0,
				quantidade: 3
			}
		],
		imagens: [
			"apple", "cherries", "flour", "ice-cream-13", "mug", "pizza-1", "sorbet",
			"apple-1", "chili", "flour-1", "ice-cream-14", "mushroom", "pizza-2", "spaguetti",
			"asparagus", "chips", "food", "ice-cream-2", "mushrooms", "pizza-3", "spatula",
			"aubergine", "chives", "fork", "ice-cream-3", "mustard", "pizza-4", "spatula-1",
			"avocado", "chocolate", "frappe", "ice-cream-4", "mustard-1", "pizza-5", "spices",
			"bacon", "coconut", "fries", "ice-cream-5", "mustard-2", "pomegranate", "spoon",
			"baguette", "coffee", "garlic", "ice-cream-6", "noodles", "popsicle", "steak",
			"banana", "coffee-1", "gingerbread", "ice-cream-7", "oat", "pot", "stew",
			"beans", "coffee-2", "glass", "ice-cream-8", "octopus", "pot-1", "stew-1",
			"biscuit", "coffee-3", "glass-1", "ice-cream-9", "oil", "pot-2", "strainer",
			"blueberries", "coffee-4", "glass-2", "jam", "olives", "potatoes", "strawberry",
			"boiled", "coffee-maker", "glass-3", "jam-1", "onion", "potatoes-1", "sushi",
			"bowl", "cookies", "glass-4", "jawbreaker", "onion-1", "potatoes-2", "sushi-1",
			"bowl-1", "corckscrew", "glass-5", "jelly", "orange", "pretzel", "sushi-2",
			"bread", "corn", "glass-6", "kebab", "ornating", "pudding", "taco",
			"bread-1", "corndog", "grain", "kebab-1", "pan", "pumpkin", "tea",
			"bread-2", "croissant", "grapes", "kebab-2", "pancakes", "radish", "tea-1",
			"broccoli", "cucumber", "grater", "kitchen", "pancakes-1", "raspberry", "teapot",
			"butcher", "cup", "grinder", "knife", "pasta", "rice", "teapot-1",
			"butter", "cupcake", "groceries", "knife-1", "pasta-1", "risotto", "teaspoon",
			"cabbage", "cupcake-1", "ham", "knife-2", "peach", "rolling-pin", "tenderizer",
			"cake", "cupcake-2", "hamburguer", "knife-3 ", "pear", "salad", "thermos",
			"can", "cutlery", "hamburguer-1", "knives", "peas", "salad-1", "toast",
			"can-1", "dairy", "hazelnut", "ladle", "pepper", "salami", "toaster",
			"can-2", "dish", "honey", "lemon", "pepper-1", "salmon", "toffee",
			"candy", "dishes", "honey-1", "lemon-1", "pickles", "salt", "tomato",
			"candy-1", "doughnut", "hot-dog", "lime", "pie", "sandwich", "turkey",
			"carrot", "doughnut-1", "hot-dog-1", "meat", "pie-1", "sandwich-1", "water",
			"cauliflower", "doughnut-2", "ice-cream", "meat-1", "pie-2", "sausage", "water-1",
			"cereals", "egg", "ice-cream-1", "meat-2", "pineapple", "scale", "watermelon",
			"cheese", "eggs", "ice-cream-10", "milk", "pint", "seeds", "whisk",
			"cheese-1", "fig", "ice-cream-11", "milk-1", "pistachio", "shrimp", "wrap",
			"chef", "fish", "ice-cream-12", "mixer", "pizza", "slotted-spoon"
		]
	},
	getters: {
		getProdutos(state) {
			return state.produtos;
		},
		getTotalCarrinho(state) {
			var total = 0;
			if (state.carrinho.length == 0) return total;

			state.carrinho.map((prod) => {
				total += prod.quantidade;
			});

			return total;
		},
		getNewIdProduto(state){			
			return state.produtos[state.produtos.length - 1].id + 1;
		},
		getProdutoById: (state) => (id) => {
			let produto = state.produtos.find((prod) => prod.id == id);
			console.log("produto: " + produto + " id: " + id);
			return produto;
		},
		getImagesProdutoByLetter: (state) => (letter) => {
			return state.imagens.filter((img) => (img[0].toLowerCase() == letter.toLowerCase()));			
		}		
	},
	//Mutations são equivalentes a 'Setters'
	mutations: {
		deletarProduto(state, produtoId) {
			let index = state.produtos.findIndex((prod) => prod.id == produtoId);

			if (index >= 0)
				state.produtos.splice(index, 1);
			else
				console.log(`Produto ID: ${produtoId} não encontrado!`);
		},
		addProdutoToCart(state, produtoId) {
			let index = state.carrinho.findIndex((prod) => prod.id == produtoId);

			if (index >= 0)
				state.carrinho[index].quantidade += 1;
			else {
				state.carrinho.push({
					produtoId: produtoId,
					quantidade: 1
				})
			}
		},
		addProduto(state, produto) {
			state.produtos.push(produto);	
		}
	}
})