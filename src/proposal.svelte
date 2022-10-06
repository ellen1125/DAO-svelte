<script>
    
    let txt = `추가예정`;
    let text = `description about proposal`;

    export let dashboard_list;

    let proposalInput = [{ title : "", state : "", for: "0", against: "0", abstain: "0" }];
    let Input = "";

    const propose_add = () => {
        console.log( {proposalInput} );
        dashboard_list.pop(proposalInput);
        dashboard_list = dashboard_list;
    }

</script>

<div style="width: 80%; margin:auto;">
    <label for="search_box">Title:</label>
    <input type="text" bind:this={proposalInput.title} placeholder="title">
    <label for="date">투표 종료:</label>
    <input type="date" min="" max="">
    <label for>select token :</label>
    <input type="text" bind:value={txt}>
    <label for>지갑주소(제안자):</label>
    <input type="text">
    <label for="detail">description about proposal:</label>
    <textarea placeholder="detail"></textarea>
</div>

<button on:click={propose_add}>submit</button>



<style>
    div{
        display: grid;
    }
    
    button{
        margin: auto;
        padding: auto;
        display: block;
    }
</style>