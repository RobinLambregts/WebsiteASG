import { createClient } from '@supabase/supabase-js';
import{PUBLIC_SERVER, PUBLIC_KEY} from '$env/static/public';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    console.log(params)
    return {};
};

/** @Type {import('./$types').Actions}*/
export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const naam = data.get('naam')
        const datum = data.get('datum')
        const locatie = data.get('locatie')

        if(naam && datum && locatie){
            console.log(naam, datum, locatie);
            const db = createClient(PUBLIC_SERVER, PUBLIC_KEY)
            await db.from("Evenementen").insert([
                { naam: naam, datum: datum, locatie: locatie},
              ])
           return {succes: true}
        }
        else{
            return {succes: false}
        }
    }
}