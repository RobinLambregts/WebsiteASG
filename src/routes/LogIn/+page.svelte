<script>
	import VoorFoto from './../voorFoto.svelte';
    export let form;
    import '../cssFile.css';
	import Navbar from './../navbar.svelte';
    import Footer from './../footer.svelte';
    import { navigate } from 'svelte-routing';
    /** @type {import('./$types').PageData} */

    if (typeof window !== 'undefined' && form) {
        if (form.succes) {
            window.alert("Hey " + form.naam);
            navigate('./ingelogd/form');
        } else {
            window.alert("Jij bent geen preasidium!");
        }
    }

</script>

<main>
    <body>
        <Navbar></Navbar>
    
        <VoorFoto frontTekst="Log In" subTekst="Alleen preasidium"></VoorFoto>

        <h6>example: naam = Zoë Smits     ww = zoeWachtwoord</h6>
        <h6>example: naam = Nora Van Dessel     ww = noraWachtwoord</h6>
        <h6>example: naam = Boud Goossenaerts     ww = boudWachtwoord</h6>
    
        <div class="logIn">
            <form method="POST">
                <label>
                    Naam
                    <input id="naamInput" name="naam" type="name">
                </label>
                <label>
                    Password
                    <input id="passwordInput" name="wachtwoord" type="password">
                </label>
                <button id="knop">Log in</button>
            </form>
        </div>
    
        <Footer></Footer>
    </body>
    
</main>