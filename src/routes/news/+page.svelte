<script>
    import Base from "$layouts/base.svelte";
    import Navigation from "$components/navigation.svelte";
    import Section from "$components/section.svelte";
    import SEO from "$components/seo.svelte";

    import { page } from "$app/stores";
    import { routes } from "$lib/routes";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<SEO
    title="Firehawk's Corner"
    description="A webtribute to when Web was simple and weird"
    url={$page.url.href}
/>

<Base>
    <Navigation slot="navigation" {routes} activeRoutes={["news"]} />

    <div slot="content">
        <Section
            title="News!"
            subtitle="Might not be breaking, but they're news!"
        >
            <div class="content">
                <p>
                    Making everything always have some kind of progress - you
                    never start something and finish it already perfected. Here
                    is what I've been up to on this site:
                </p>
                <svelte:component this={data.body} />
            </div>
        </Section>
    </div>
</Base>

<style>
    .content {
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .content p:first-of-type {
        margin-bottom: 12px;
    }

    .content :global(p) {
        text-align: justify;
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
    }

    .content :global(ul) {
        margin: 0;
    }

    .content :global(li) {
        font-size: 1.2rem;
    }

    .content :global(h2) {
        margin: 0;
        
        font-size: 1.5rem;
        line-height: 1.6rem;
        color: var(--medium-blue)
    }
</style>
