<script>
export let data;
import VoorFoto from './../voorFoto.svelte';
import Footer from './../footer.svelte';
import Navbar from './../navbar.svelte';
import '../cssFile.css';
import './opdeling.css';
const preasesArray = JSON.parse(data.preases);
    /** @type {import('./$types').PageData} */
</script>

<main>
    <body>
        <Navbar></Navbar>

        <VoorFoto frontTekst="Preasidium" subTekst="Leer ons kennen"></VoorFoto>

        <div class="hp">
            <div class="preases"><p>{preasesArray[0].naam}</p><p>{preasesArray[0].functie}</p></div>
            <div class="vice1"><p>{preasesArray[1].naam}</p><p>{preasesArray[1].functie}</p></div>
            <div class="vice2"><p>{preasesArray[2].naam}</p><p>{preasesArray[2].functie}</p></div>
        </div>
        <div class="hp2">
            <div class="aa"><p>{preasesArray[3].naam}</p><p>{preasesArray[3].functie}</p></div>
            <div class="questor"><p>{preasesArray[4].naam}</p><p>{preasesArray[4].functie}</p></div>
        </div>
        <div style="height: 4vw;"></div>
        <div class="lp">
            <div class="lp1"><p>{preasesArray[5].naam}</p><p>{preasesArray[5].functie}</p></div>
            <div class="lp2"><p>{preasesArray[6].naam}</p><p>{preasesArray[6].functie}</p></div>
            <div class="lp3"><p>{preasesArray[7].naam}</p><p>{preasesArray[7].functie}</p></div>
            <div class="lp4"><p>{preasesArray[8].naam}</p><p>{preasesArray[8].functie}</p></div>
        </div>
        <div class="lp">
            <div class="lp1"><p>{preasesArray[9].naam}</p><p>{preasesArray[9].functie}</p></div>
            <div class="lp2"><p>{preasesArray[10].naam}</p><p>{preasesArray[10].functie}</p></div>
            <div class="lp3"><p>{preasesArray[11].naam}</p><p>{preasesArray[11].functie}</p></div>
            <div class="lp4"><p>{preasesArray[12].naam}</p><p>{preasesArray[12].functie}</p></div>
        </div>
        <div class="lp">
            <div class="lp1"><p>{preasesArray[13].naam}</p><p>{preasesArray[13].functie}</p></div>
            <div class="lp2"><p>{preasesArray[14].naam}</p><p>{preasesArray[14].functie}</p></div>
            <div class="lp3"><p>{preasesArray[15].naam}</p><p>{preasesArray[15].functie}</p></div>
            <div class="lp4"><p>{preasesArray[16].naam}</p><p>{preasesArray[16].functie}</p></div>
        </div>
        <div class="lp">
            <div class="lp1"><p>{preasesArray[17].naam}</p><p>{preasesArray[17].functie}</p></div>
            <div class="lp2"><p>{preasesArray[18].naam}</p><p>{preasesArray[18].functie}</p></div>
            <div class="lp3"><p>{preasesArray[19].naam}</p><p>{preasesArray[19].functie}</p></div>
            <div class="lp4"><p>{preasesArray[20].naam}</p><p>{preasesArray[20].functie}</p></div>
        </div>
        <div class="lp">
            <div class="lp1"><p>{preasesArray[21].naam}</p><p>{preasesArray[21].functie}</p></div>
            <div class="lp2"><p>{preasesArray[22].naam}</p><p>{preasesArray[22].functie}</p></div>
            <div class="lp3"><p>{preasesArray[23].naam}</p><p>{preasesArray[23].functie}</p></div>
            <div class="lp4"><p>{preasesArray[24].naam}</p><p>{preasesArray[24].functie}</p></div>
        </div>
        
        <Footer></Footer>
    </body>
</main>