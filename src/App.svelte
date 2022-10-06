<script>
	//import Contents from './main_contents.svelte';
	import Contents_detail from './contents_detail.svelte';
	import { connect_wallet} from './wallet';
	import Eth_con from './ethereum.svelte';
	import Pol_con from './polygon.svelte';
	import Opt_con from './optimism.svelte';
	import Arb_con from './arbitrum.svelte';
	import Cel_con from './celo.svelte';
	export let address;

 	// let list = [
 	// 	{ icon : "favicon.png", name : "DopeWars", people : "1993"},
 	// 	{ icon : "favicon.png", name : "Gitcoin", people : "1234" },
 	// 	{ icon : "favicon.png", name : "Compound", people : "9281" }
 	// ];

 	let value ="";
	let network = "";

	function networkclick(name)
	{
		network = name;
	}

 	function handleClick(name) {
 		value = name;
 		console.log(value);
   }

</script>


<div id="sidebar">
	<p style="display: inline;">{address}</p>
	<button on:click={connect_wallet}>지갑 연결</button>
</div>
<p style="clear:both;"></p>
<hr class='hr-solid'/>

<div id="main_con">
	<div class="con" on:click={() => networkclick("eth")}>Etheruem</div>
	<div class="con" on:click={() => networkclick("pol")}>Polygon</div>
	<div class="con" on:click={() => networkclick("opt")}>Optimism</div>
	<div class="con" on:click={() => networkclick("arb")}>Arbitrum</div>
	<div class="con" on:click={() => networkclick("cel")}>Celo</div>
</div>

{#if network == "" }
	<!-- <div id="main_con">
		{#each list as item}
			<div class="space" on:click={() => handleClick(item.name)}>
				<img id="icon" src="{item.icon}" alt=""/>
				<h3 id="name">{item.name}</h3>
				<p id="peo_num">voter : {item.people}</p>
			</div>
		{/each}
	</div> -->
	<p style="text-align:center;">network를 선택해주세요</p>
	
	{:else if network=="eth"}
	<div>
		<Eth_con />
	</div>
	{:else if network=="pol"}
	<div>
		<Pol_con />
	</div>
	{:else if network=="opt"}
	<div>
		<Opt_con />
	</div>
	{:else if network=="arb"}
	<div>
		<Arb_con />
	</div>
	{:else if network=="cel"}
	<div>
		<Cel_con />
	</div>
{:else}
	<div>
		<p style="text-align:center;">network를 선택해주세요</p>
	</div>
{/if}

<!--<Proposal/>-->


<style>
	#sidebar {
		float: right;
		display: block;
	}

	button {
		font-size: smaller;
		width: 80px;
		height: 40px;
		margin: 5px;
	}

	.hr-solid {
		border : 2px;
  		border-top: 2px solid black;
	}
	#main_con {
		width: 90%;
    	margin: 10px auto;
	}
	.con {
		display: inline-block;
		width:19%;
		height: 30px;
		margin: auto;
		font-size: larger;
		text-align: center;
		align-items: center;
		background-color: #282828;
		color: white;
	}
	.con:hover {
		background-color: #1478CD;
	}
	.space {
		display: inline-block;
		width: 150px;
		height: 200px;
		border: 2px solid black;
		align-items: center;
		margin: 10px;
	}
	
	#icon {
		display: block;
		padding: 10px;
		margin: auto;
		width: 80px;
		height: 80px;
	}
	#name{
		display: block;
		padding: 10px;
		margin: auto;
		text-align: center;

	}
	#peo_num{
		display: block;
		padding: 10px;
		margin: auto;
		text-align: center;
		font-size: smaller;
	}
</style>