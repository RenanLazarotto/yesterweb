<script>
    import Base from "$layouts/base.svelte";
    import Navigation from "$components/navigation.svelte";
    import Section from "$components/section.svelte";
    import SEO from "$components/seo.svelte";

    import { page } from "$app/stores";
    import { routes } from "$lib/routes";
</script>

<SEO
    title="Firehawk's Corner"
    description="A webtribute to when Web was simple and weird"
    url={$page.url.href}
/>

<Base>
    <Navigation slot="navigation" {routes} activeRoutes={["home"]} />

    <div slot="content" class="wrapper">
        <Section
            title="Welcome!"
            subtitle="Got a selection of good things on sale, stranger!"
        >
            <div class="content">
                <p>
                    Hello there! I am the Firehawk, and this is my slightly
                    weird corner on the internet.
                </p>
                <p>
                    I'm a passionate web developer, working full-time from home
                    turning coffee into (not-)poorly written code. I mostly
                    develop PHP backends, and while I love my job, the internet
                    is now too complex to the point it gets tiring.
                </p>
                <p>This site is my escape from that.</p>
            </div>
        </Section>

        <Section title="News">
            <div class="content">
                <p>
                    This is the first version of my website! There are no news
                    as of yet, but here's what to expect:
                </p>

                <ul>
                    <li>gaming-related stuff</li>
                    <li>programming-related stuff</li>
                    <li>things I might find interesting</li>
                </ul>

                <p>
                    For now, you can check out my games gallery, with some of
                    the games that have left a mark on me from my childhood!
                </p>
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
        font-size: 1.2rem;
    }

    ul {
        margin: 0;
        font-size: 1.2rem;
    }
</style>
