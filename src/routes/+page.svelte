<script>
    import Container from "$lib/components/container.svelte";
    import BaseLayout from "$lib/layouts/baselayout.svelte";
    import SEO from "$lib/components/seo.svelte";

    import { page } from "$app/stores";
</script>

<SEO
    title="Firehawk's Corner"
    description="A webtribute to when Web was simple and weird"
    url={$page.url.href}
/>

<BaseLayout>
    <div slot="content">
        <Container title="Welcome!">
            <div slot="content" class="content">
                <i>Got a selection of good things on sale, stranger!</i>

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
        </Container>

        <Container title="News">
            <div slot="content" class="content">
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
        </Container>
    </div>
</BaseLayout>

<style>
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
