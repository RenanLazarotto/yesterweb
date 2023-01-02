<script>
    /** @type {import("./$types").PageData} */
    export let data;

    import Container from "$lib/components/container.svelte";
    import BaseLayout from "$lib/layouts/baselayout.svelte";
    import SEO from "$lib/components/seo.svelte";

    import { page } from "$app/stores";
    import Gallery from "$lib/components/gamegallery.svelte";
</script>

<SEO
    title={data.info.seo.title}
    description={data.info.seo.description}
    url={$page.url.href}
/>
<BaseLayout>
    <div slot="content" class="content-wrapper">
        <Container title={data.info.content.title}>
            <div slot="content" class="content">
                <i>{data.info.content.subtitle}</i>

                {#each data.info.content.description as line}
                    <p>{line}</p>
                {/each}

                <Gallery data={data.games} />
            </div>
        </Container>
    </div>
</BaseLayout>

<style>
    div.content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    div.content {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    p {
        text-align: justify;
        margin: 0;
    }
</style>
