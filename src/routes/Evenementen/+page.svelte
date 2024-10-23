<script>
    import { onMount } from 'svelte';

export let data;
import VoorFoto from './../voorFoto.svelte';
import Footer from './../footer.svelte';
import Navbar from './../navbar.svelte';
import '../cssFile.css';
    /** @type {import('./$types').PageData} */
</script>

<main>
    <body>
        <Navbar></Navbar>

        <VoorFoto frontTekst="Evenementen" subTekst=""></VoorFoto>

        <div class="lijst">
            {#each data.evenementen as {naam, datum, locatie}, i}
		        <li id="evenementen">
                    <p>{naam}</p>
                    <p>{datum}</p>
                    <p>{locatie}</p>
		        </li>
	        {/each}
        </div>
        
        <Footer></Footer>
    </body>
</main>