/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { slug } = params;

    const games = await import(`../../../content/games-${slug}.js`);
    
    return games;
}