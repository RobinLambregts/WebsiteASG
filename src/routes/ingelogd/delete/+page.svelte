<script>
    /** @type {import('./$types').PageData} */
    export let data;
    export let form;
</script>

{#if form.succes }
    <p>verwijderd</p>
    {:else}
    <p>niet verwijdert wegens ontbrekende naam</p>
{/if}


<a href="../ingelogd/form">Go back</a>