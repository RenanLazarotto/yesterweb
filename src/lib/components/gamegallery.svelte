<script>
    /** @type {import("src/types/gamegallerydata").GameGalleryData}*/
    export let data;
</script>

<div class="gallery">
    {#each data as game}
        <div class="card">
            <img src={game.img.src} alt={game.img.alt} />
            <div class="content">
                <h2>{game.name}</h2>
                {#each game.description as line}
                    <p>{@html line}</p>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    div.gallery {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    div.card {
        padding: 5px;
        border: 1px solid white;
        display: flex;
        gap: 8px;
    }

    .card h2 {
        font-family: "MP16", monospace;
        color: limegreen;
        margin: 0;
    }

    div.card img {
        max-width: 200px;
        height: auto;
        object-fit: contain;
    }
</style>
