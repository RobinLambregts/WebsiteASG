/** @type {import('./$types').PageServerLoad} */
import{PUBLIC_SERVER, PUBLIC_KEY} from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
export async function load() {
    const db = createClient(PUBLIC_SERVER, PUBLIC_KEY)
    const evenementen = await db.from("Evenementen").select("*");

    console.log(evenementen)
    return {
        aantal : evenementen.data.length,
        evenementen : evenementen.data,
        ruw : evenementen
    }
};