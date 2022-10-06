<script>

    import Proposal from './proposal.svelte';
    import Proposal_detail from './proposal_detail.svelte';


    export let value;

    let dashboard_list = [
		{ title : "DOPE DAO TAKES TO THE HIGH SEAS", state : "ACTIVE", for: "60", against: "50", abstain: "0" },
        { title : "sample2", state : "CANCELED", for: "60", against: "50", abstain: "0" },
        { title : "sample3", state : "EXECUTED", for: "60", against: "50", abstain: "0" }
	];

    function Click(name) {
		value = name;
		console.log(value);
  }

  function ClickDash(name) {
        value = name;
		console.log(value);
  }

    
</script>

{#if value == "create_proposal" }
    <Proposal/>
{:else if value=="proposal_detail"}
    <Proposal_detail/>
{:else}
    <div>
        <div id="Contentsdetail">
            <h3> {value} </h3>
        </div>

        <button id="create_pro" on:click={() => Click("create_proposal")}> create Proposal </button>

        <div id="dash_board">
            {#each dashboard_list as item}
                <div class="space" on:click={() => ClickDash("proposal_detail")}>
                    <h3 class="box_item">{item.title}</h3>
                    <p class="box_item">{item.state}</p>
                    <p class="box_item">for: {item.for}</p>
                    <p class="box_item">against: {item.against}</p>
                    <p class="box_item">abstain: {item.abstain}</p>
                </div>
            {/each}
        </div>
    </div>
{/if}




<style>
    #Contentsdetail{
		margin : 1px;
    }

    #create_pro {
		margin : 1px;
    }

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
</style>