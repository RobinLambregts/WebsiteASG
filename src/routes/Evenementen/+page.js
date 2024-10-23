/** @type {import('./$types').PageLoad} */
export async function load({data}) {
    console.log(data)
    return {
        aantal : data.aantal,
        evenementen : data.evenementen,
    };
};

