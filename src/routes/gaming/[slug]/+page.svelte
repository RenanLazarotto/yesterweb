<script>
    /** @type {import("./$types").PageData} */
    export let data;
    
    import SEO from "$lib/components/seo.svelte";
    import BaseLayout from "$lib/layouts/baselayout.svelte";
    import Container from "$lib/components/container.svelte";
    import GameGallery from "$lib/components/gamegallery.svelte";
    import Navigation from "$lib/components/navigation.svelte";

    import { page } from "$app/stores";
    import { routes } from "$lib/routes/routes";
</script>

<SEO
    title={data.info.seo.title}
    description={data.info.seo.description}
    url={$page.url.href}
/>
<BaseLayout>
    <Navigation slot="navigation" {routes} activeRoutes={data.info.activeRoutes} />
    <div slot="content" class="content-wrapper">
        <Container title={data.info.content.title}>
            <div slot="content" class="content">
                <i>{data.info.content.subtitle}</i>

                {#each data.info.content.description as line}
                    <p>{line}</p>
                {/each}

                <GameGallery data={data.games} />
            </div>
        </Container>
    </div>
</BaseLayout>

<style>
    div.content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }

    div.content {
        padding: var(--padding);
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }
    p {
        text-align: justify;
        margin: 0;
    }

    i {
        font-weight: 500;
    }
</style>
