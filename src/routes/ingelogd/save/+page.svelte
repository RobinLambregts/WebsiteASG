<script>
    /** @type {import('./$types').PageData} */
    export let data;
    export let form;
</script>

{#if form.succes }
    <p>toegevoegd</p>
    {:else}
    <p>niet toegevoegd wegens ontbrekende veld(en)</p>
{/if}

<a href="../ingelogd/form">Go back</a>