<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import './../../cssFile.css'
    let naam = ""
    let datum = ""
    let locatie = ""

    let deleteNaam = ""

    let updateNaam = ""
    let newLocation = ""
</script>

<main>
    <body>    
        <div id="eventManager">
            <h1>add/delete/update evenement</h1>

            <form method="POST" action="save" id="saveForm">
                <label for="naam">naam</label><br>
                <input type="text" name="naam" bind:value="{naam}" /><br/><br>
                <label for="datum">datum</label><br>
                <input type="date" name="datum" bind:value="{datum}" /><br/><br>
                <label for="locatie">locatie</label><br>
                <input type="text" name="locatie" bind:value="{locatie}" /><br/>
                <button>save</button>
            </form>

            <br>

            <form method="POST" action="delete" id="saveForm">
                <label for="deleteNaam">evenement om te verwijderen</label><br>
                <input type="text" name="deleteNaam" bind:value="{deleteNaam}" /><br/>
                <button>delete</button>
            </form>

            <br>

            <form method="POST" action="update" id="saveForm">
                <label for="updateNaam">evenement om up te daten</label><br>
                <input type="text" name="updateNaam" bind:value="{updateNaam}" /><br/><br>
                <label for="newLocation">nieuwe locatie</label><br>
                <input type="text" name="newLocation" bind:value={newLocation}><br>
                <button>update</button>
            </form>
        </div>

        
        
        <div>
           <a href="../../LogIn">Log out</a> 
        </div>
    </body>
</main>
