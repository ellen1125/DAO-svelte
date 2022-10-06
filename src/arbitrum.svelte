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
    <div style="width:80%; margin:auto;">
        <button id="create_pro" on:click={() => Click("create_proposal")}> create Proposal </button>
        <p style="clear:both;"></p>

        <div id="dash_board">
            {#each dashboard_list as item}
                <div class="space" on:click={() => ClickDash("proposal_detail")}>
                    <h3 style="margin: 5px;">{item.title}</h3>
                    <p style="position:absolute; left:50%;">{item.state}</p>
                    <p style="position:absolute; left:60%;">for: {item.for}</p>
                    <p style="position:absolute; left:70%;">against: {item.against}</p>
                    <p style="position:absolute; left:80%;">abstain: {item.abstain}</p>
                </div>
            {/each}
        </div>
    </div>
{/if}




<style>
    #create_pro {
		margin : 1px;
        float: right;
    }

    .space {
		display: flex;
		border: 2px solid black;
		margin : 1px;
		height: 100%;
		align-items: center;
	}
</style>