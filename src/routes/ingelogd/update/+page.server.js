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
        const formData = await request.formData();
        const naam = formData.get('updateNaam')
        const formLocatie = formData.get('newLocation')

        if(formLocatie && naam){
            console.log(naam, "---", formLocatie);
            const db = createClient(PUBLIC_SERVER, PUBLIC_KEY)

            const { data, error } = await db
            .from('Evenementen')
            .update({ locatie: formLocatie })
            .eq('naam', naam)
            .select()
          
            return {succes: true}
        }
        else{
            return {succes: false}
        }
    }
}