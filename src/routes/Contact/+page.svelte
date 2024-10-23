<script>
	import VoorFoto from './../voorFoto.svelte';
	import Footer from './../footer.svelte';
	import Navbar from './../navbar.svelte';
    import '../cssFile.css'
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    <body>
        <Navbar></Navbar>

        <VoorFoto frontTekst="Contact" subTekst=""></VoorFoto>

        <div id="wit" class="kaart">
            <li>
                <ul>
                    <h1>Adres:</h1>
                    <p><i class="fas fa-map-marker-alt"></i> Agoralaan, gebouw D, 3590 Dipenbeek</p>
                </ul>
                <ul>
                    <h1>Email:</h1>
                    <h3>Voor algemene vragen:</h3>
                    <a href="info@asgdiepenbeek.be"><i class="fas fa-envelope"></i> info@asgdiepenbeek.be</a>
                    <h3>Voor samenwerkingen:</h3>
                    <a href="pr@asgdiepenbeek.be"><i class="fas fa-envelope"></i> pr@asgdiepenbeek.be</a>
                </ul>
                <ul>
                    <h1>LinkedIn:</h1>
                    <a href="https://www.linkedin.com/company/a-s-g-diepenbeek/ "><i class="fab fa-linkedin"></i> https://www.linkedin.com/company/a-s-g-diepenbeek/ </a>
                </ul>
                <ul>
                    <h1>Facebook:</h1>
                    <a href="https://www.facebook.com/asgdiepenbeek"><i class="fab fa-facebook-square"></i> https://www.facebook.com/asgdiepenbeek</a>
                </ul>
                <ul>
                    <h1>Instagram:</h1>
                    <a href="https://www.instagram.com/a.s.g.diepenbeek/"><i class="fab fa-instagram-square"></i> https://www.instagram.com/a.s.g.diepenbeek/</a>
                </ul>
            </li>
        </div>
        
        <Footer></Footer>
    </body>
</main>