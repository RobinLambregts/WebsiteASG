/** @type {import('./$types').PageServerLoad} */
import{PUBLIC_SERVER, PUBLIC_KEY} from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
export async function load() {
    const db = createClient(PUBLIC_SERVER, PUBLIC_KEY)
    const preases = await db.from("Preasidium").select("naam, functie")
    .order("rangorde")
    .order("functie");

    console.log(preases)
    return {
        aantal : preases.data.length,
        preases : JSON.stringify(preases.data),
        ruw : preases
    }
};