<script>
    /** @type {import('./$types').PageData} */
    export let data;
    export let form;
</script>

{#if form.succes }
    <p>geupdate</p>
    {:else}
    <p>niet geupdate wegens ontbrekende veld(en)</p>
{/if}

<a href="../ingelogd/form">Go back</a>