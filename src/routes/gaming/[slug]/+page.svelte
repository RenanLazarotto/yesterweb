<script>
    /** @type {import("./$types").PageData} */
    export let data;
    
    import Base from "$layouts/base.svelte";
    import Gallery from "$components/gallery.svelte";
    import Navigation from "$components/navigation.svelte";
    import Section from "$components/section.svelte";
    import SEO from "$components/seo.svelte";

    import { page } from "$app/stores";
    import { routes } from "$lib/routes";
</script>

<SEO
    title={data.info.seo.title}
    description={data.info.seo.description}
    url={$page.url.href}
/>
<Base>
    <Navigation slot="navigation" {routes} activeRoutes={data.info.activeRoutes} />
    <div slot="content" class="wrapper">
        <Section title={data.info.content.title} subtitle={data.info.content.subtitle}>
            <div class="content">
                {#each data.info.content.description as line}
                    <p>{line}</p>
                {/each}

                <Gallery data={data.games} />
            </div>
        </Section>
    </div>
</Base>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .content {
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    p {
        text-align: justify;
        margin: 0;
    }
</style>
