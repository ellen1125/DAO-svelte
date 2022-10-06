<script>
	import { createEventDispatcher } from 'svelte';

	export let value;

	const dispatch = createEventDispatcher();


	export let list = [
		{ icon : "favicon.png", name : "DopeWars", people : "1993"},
		{ icon : "favicon.png", name : "Gitcoin", people : "1234" },
		{ icon : "favicon.png", name : "Compound", people : "9281" }
	];

</script>

<div>
	<!-- <div id="search_div">
		<label for="search_box">Search:</label>
		<input type="text" id="search_box" name="search_box"/>
	</div> -->

	<div  id="main_con">

		{#each list as item}
			<div class="space" on:click="{() => choice = "DopeWars"}">
				<img class="box_item" id="icon" src="{item.icon}" alt=""/>
				<h3 class="box_item" id="name">{item.name}</h3>
				<p class="box_item" id="peo_num">voter:{item.people}</p>
			</div>
		{/each}

	</div>
	
</div>

	

<style>

	/* a:link { color: black; text-decoration: none;}
	a:visited { color: black; text-decoration: none;} 
	a:hover { color: black; text-decoration: none;}

	#search_div {
		width: 80%;
	} */

	#main_con {
		width: 90%;
    	margin: 10px auto;
	}
/* 	
	.dash_board {
		display: grid;
		width: 47%;
		height: 90vh;
		overflow: hidden;
		border: 2px solid black;
		margin: 1px auto;
	} */

	/* .community_list {
		display: grid;
		border: 2px solid black;
		margin: 1px auto;
		width: 100%;
		grid-template-columns: repeat(1, 1fr);
   	} */

	.space {
		display: flex;
		border: 2px solid black;
		margin : 1px;
		height: 100%;
		align-items: center;
	}

	.box_item{
		flex: 2 1 0;
	}
	
	#icon {
		margin: auto;
		width: 50px;
		height: 50px;
	}

	/* .item {
		display: grid;
		border: 2px solid black;
		text-align: center;
		margin : 1px;
		grid-template-columns: repeat(3, 1fr);
		height: 100%;
	}
	
	#title {
		grid-column: 1 / 4;
	}  */

</style>