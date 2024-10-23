<script>
	import VoorFoto from './../voorFoto.svelte';
	import Navbar from './../navbar.svelte';
    import Footer from './../footer.svelte';
    import '../cssFile.css'
</script>

<main>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A.S.G.</title>
</head>
<body>
    <Navbar></Navbar>
    
    <VoorFoto frontTekst="Welkom bij A.S.G. Diepenbeek" subTekst="A.S.G., altijd een feestje!"></VoorFoto>

    <div id="inschrijven">
        <img src="src\lib\assets\Schild - Opgevuld.ico" alt="Schild" id="schild">
        <li id="knoppenlijst">
            <ul><a href="https://entrytickets.be/asg/portal/register" id="knop">WORDT LID</a></ul>
            <ul><a href="https://drive.google.com/drive/folders/1hQVQnIpXX_QOmc4pSuZKt3buDKBn6tjQ?usp=sharing" id="knop">Bekijk hier al onze bekskes</a></ul>
        </li>
        <img src="src\lib\assets\Schild - Opgevuld.ico" alt="Schild" id="schild">
    </div>

    <div class="witRood"></div>

    <div id="rood" class="preasidiumEvenementen">
        <a href="../Preasidium"><img src="src\lib\assets/foto-58.jpg" alt="foto Zoë" style="height: 30vw; border-radius: 30px"></a>
        <li>
            <h3 id="linksBeweeg" style="margin: 0; padding: 2vw;">🡨 Leer Zoë Smits en haar preasidium kennen</h3>
            <h3 id="rechtsBeweeg" style="margin: 0; padding: 2vw;">Bekijk al onze komende evenementen 🡪</h3>
        </li>
        <a href="../Evenementen"><img src="src\lib\assets/images.jpeg" alt="foto Evenementen" style="height: 30vw; border-radius: 30px; width: 20vw"></a>
    </div>

    <div class="roodWit"></div>

    <div id="inschrijven" style="height:10vw">
        <li id="knoppenlijst">
            <ul><a href="../contact" id="knop">Contacteer ons</a></ul>
        </li>
    </div>
 
    <Footer></Footer> 
    
</body>
</main>