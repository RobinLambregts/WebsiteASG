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
        const naam = data.get('deleteNaam')

        if(naam){
            const db = createClient(PUBLIC_SERVER, PUBLIC_KEY)
            const {error} = await db.from("Evenementen").delete()
            .eq('naam', naam)
            return {succes: true}
        }
        else{
            return {succes: false}
        }
    }
}