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
        gap: 8px;
    }

    .card {
        border: 1px solid var(--dark-blue);
        padding: 8px;
    }

    .card h2 {
        font-size: 20px;
        line-height: 20px;
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
