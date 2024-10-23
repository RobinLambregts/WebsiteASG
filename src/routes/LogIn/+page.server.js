/** @type {import('./$types').PageServerLoad} */
import{PUBLIC_SERVER, PUBLIC_KEY} from '$env/static/public';
import{PRIVATE_PEPPER} from '$env/static/private';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';
import { navigate } from 'svelte-routing';
import { redirect } from '@sveltejs/kit';
export async function load() {
    return{};
};

/** @Type {import('./$types').Actions}*/
export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const naam = formData.get('naam')
        const wachtwoord = formData.get('wachtwoord') + PRIVATE_PEPPER
        await bcrypt.hash(wachtwoord, 10)

        const db = createClient(PUBLIC_SERVER, PUBLIC_KEY)
        let { data, error } = await db
        .from('Preasidium')
        .select('naam,wachtwoord')
        .eq('naam', naam)
        if (error || data.length == 0){
            return {
                succes: false,
                naam: null
            };
        }

        const user = data[0]
        console.log(user)

        if (await bcrypt.compare(wachtwoord, user.wachtwoord)){
            return {
                succes: true,
                naam: user.naam
            }
        }
    }
}