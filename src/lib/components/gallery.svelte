<script>
    /** @type {import("src/types/gamegallerydata").GameGalleryData}*/
    export let data;
</script>

<div class="gallery">
    {#each data as game}
        <div class="card">
            <img src={game.img.src} alt={game.img.alt} />
            <h2>{game.name}</h2>
            {#each game.description as line}
                <p>{@html line}</p>
            {/each}
        </div>
    {/each}
</div>

<style>
    .gallery {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }

    .card {
        border: 1px solid var(--dark-blue);
        padding: var(--padding);
    }

    .card h2 {
        font-family: var(--body-font);
        font-size: var(--heading-font-size);
        line-height: var(--heading-line-height);
        
        color: var(--medium-blue);
        margin: 0;
    }

    .card img {
        max-width: 200px;
        height: auto;
        margin-right: 8px;
        object-fit: contain;
        float: left;
        display: block;
    }

    .card p {
        margin: 8px 0;
    }

    .card p:last-of-type {
        margin-bottom: 0;
    }
</style>
