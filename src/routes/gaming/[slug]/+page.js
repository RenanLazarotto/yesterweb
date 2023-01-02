/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { slug } = params;

    const games = await import(`../../../content/games/${slug}.js`);
    const pageInfo = await import(`../../../content/pages/${slug}.js`);
    
    return { 
        ...pageInfo,
        ...games 
    };
}