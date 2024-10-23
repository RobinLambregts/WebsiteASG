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
    <title>Document</title>
    <link rel="stylesheet" href="cssFile.css">
</head>
<body>
    <Navbar></Navbar>

    <VoorFoto frontTekst="Over Ons" subTekst="En wat wij doen"></VoorFoto>

    <div id="wit" class="overOns">
        <li>
            <ul><h3 class="tussenTitel" style="color: red;">Over Ons</h3></ul>
            <ul><p style="color: red;">Wij zijn studentenvereniging A.S.G. (Algemene Studenten Groepering) en zijn verbonden aan de faculteit Industriële ingenieurswetenschappen van de UHasselt associatie KULeuven. Met ons 76-jarige bestaan zijn wij de oudste nog bestaande studentenvereniging van heel Limburg. <br><br>

                Het organiseren van evenementen en creëren van één hechte vriendengroep zijn onze voornaamste bezigheden. We streven ernaar om deze vriendengroep te vormen door leuke activiteiten te organiseren, natuurlijk met de nodige pintjes om deze nog zoveel plezanter te maken! Als team staan we klaar voor al onze leden en we streven ernaar om iedereen de best mogelijke studententijd te bezorgen.</p></ul>
        </li>
        <img src="src\lib\assets/380587041_269634369310068_1449378512606858654_n.webp" alt="Foto1" id="foto" style="border-color: red;">
    </div>

    <div class="witRood"></div>

    <div id="rood" class="overOns">
        <img src="src\lib\assets/381066634_269632182643620_5884179746273291777_n.webp" alt="Foto1" id="foto" style="border-color: white;">
        <li>
            <ul><h3 class="tussenTitel" style="color: white;">Wat doen wij?</h3></ul>
            <ul><p style="color: white;">Zoals reeds aangehaald organiseren wij tal van activiteiten zowel intern als voor het brede publiek. Zo organiseren wij onze 'Hier nen euro TD', waar je drankbonnen kan kopen voor slechts 1 euro per bon! Natuurlijk staat ook onze befaamde 'Retro 90's TD' weer op het programma. Hierbij verkleden alle studenten zich in hun mooiste flashy outfit en gaan ze los op de beste schijven van de jaren 90. Naast onze TD's organiseren wij ook tal van cantussen, fakbars, een jobbeurs, een skireis en meerdere weekends. <br><br>

                Naast de nodige ontspanning zorgt A.S.G. ook voor begeleiding bij je studies. Zo voorzien wij studiesessies, blokbars, vraagmomenten en voor de schachten is er zelfs persoonlijke begeleiding mogelijk! Ook kunnen de schachten beroep doen op ons studie-/cursusmateriaal en aantekeningen om hun studies te vergemakkelijken. Daarnaast zetten we ook sterk in op het creëren van een goede sfeer tussen de leden en anderen studenten. Daarom organiseren we dit jaar een masterreis tijdens de lesvrije week, waarop alle masterstudenten elkaar beter kunnen leren kennen buiten de schoolomgeving.</p></ul>
        </li>
    </div>

    <div class="roodWit"></div>

    <div id="wit" class="overOns">
        <li>
            <ul><h3 class="tussenTitel" style="color: red;">Verenigingscultuur</h3></ul>
            <ul><p style="color: red;">De kernfilosofie van A.S.G. wordt samengevat in de leuze "A.S.G., Altijd een feestje!" Deze leuze weerspiegelt de positieve en levendige sfeer die de vereniging nastreeft, met een focus op het creëren van een gemeenschap waarin studenten zich betrokken voelen en kunnen genieten van hun universiteitservaring. <br><br>
                Ons verenigingslied, de "Limburgse Gilde" dient als een muzikaal symbool van de vereniging en verbindt leden met de cultuur en geschiedenis van de regio. <br><br>
                De rood-witte verenigingskleuren vertegenwoordigen de trots van A.S.G. en zijn een zichtbaar teken van identificatie voor de leden binnen de universitaire gemeenschap.</p></ul>
        </li>
        <img src="src\lib\assets/380417588_269638852642953_5710355544206832232_nBW-2.webp" alt="Foto1" id="foto" style="border-color: red;">
    </div> 
    
    <Footer></Footer>

</body>
</main>