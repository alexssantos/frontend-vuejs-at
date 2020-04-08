<template>
	<div id="header">
		<b-navbar toggleable="lg">
			<b-navbar-brand :to="{ name: 'home' }">
				<i class="fas fa-store"></i>
				Market Food
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-navbar-nav>				
				<button
					class="btn btn-outline-secondary mx-2 my-2 my-sm-0"
					type="button"		
					@click="$router.push('home')"			
				>
					<i class="fas fa-home my-auto mx-2"></i>
				</button>
				<button
					class="btn btn-outline-secondary mx-2 my-2 my-sm-0"
					type="button"
					@click="$router.push('create')"
				> 
				<i class="fas fa-plus my-auto mx-2"></i>
				Criar Produto
				</button>				
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">
				<div class="row">
					<b-nav-form>
						<b-form-input
							class="mr-sm-2"
							placeholder="Search"
						></b-form-input>
						<button
							size="sm"
							class="my-2 my-sm-0 btn btn-outline-secondary"
							type="submit"
						>
							Search
						</button>
					</b-nav-form>
					<button
						class="btn btn-outline-secondary mx-3 my-2 my-sm-0"
						type="button"
					>
						<i class="fas fa-shopping-cart my-auto mx-2">
							12
						</i>
					</button>
				</div>
			</b-navbar-nav>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "Header"
};
</script>

<style>
#header {
	background-color: #fed4d7;
}
h3 {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
