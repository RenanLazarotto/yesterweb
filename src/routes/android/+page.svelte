<script>
    import BaseLayout from "$lib/layouts/base.svelte";
    import Navigation from "$lib/components/navigation.svelte";
    import Section from "$lib/components/section.svelte";
    import SEO from "$lib/components/seo.svelte";

    import { page } from "$app/stores";
    import { routes } from "$lib/routes";
</script>

<SEO
    title="Android Stuff"
    description="Page dedicated to talk about Android things"
    url={$page.url.href}
/>
<BaseLayout>
    <Navigation slot="navigation" {routes} activeRoutes={["android"]} />
    <div slot="content" class="wrapper">
        <Section
            title="SMART DROID - ORDER TO DESTROY"
            subtitle="The best mobile operating system according to a survey by me."
        >
            <div class="content">
                <p>
                    So, ever since everybody went crazy with smartphones and
                    stuff, I've been an Android user.
                </p>
                <p>
                    To be fair and honest, I've tried iOS twice: once when I had
                    an iPhone 4 and later when I got one iPhone 7. Both
                    experiences have been somewhat enjoyable - the iPhone 4
                    was/is toy sized for me, so it wasn't as good as I expected.
                </p>
                <p>
                    From there, I had quite a share of Android devices, Moto and
                    Samsung ones being my favourites (Miss ya, Moto X). And just
                    like about every Android device, most of them get left out
                    from newer versions only after one or two major OS upgrades.
                </p>
                <p>
                    For reasons that I simply can't remember right now (I was,
                    perhaps, 16 when I first started messing around with custom
                    ROMs - I'm over 30 now), I landed on the world of custom
                    Android ROMs.
                </p>
            </div>
        </Section>
        <Section
            title="Custom ROMs - what do they eat?"
            subtitle="Kicking that shitty bloatware out of way!"
        >
            <div class="content">
                <p>
                    Whats a ROM, after all? Well, its the software that you
                    phone runs - in this case, the Android is the base software
                    and every manifacturer customizes it in order to create its
                    own look-and-feel to match their brand or promote their
                    services.
                </p>
                <p>
                    You can easily note this by picking two devices from
                    different brands and hold them side-by-side. While there are
                    many common factors, like the quick settings panel and the
                    settings app, for example, they can look wildly different.
                </p>
                <div class="side-by-side">
                    <div class="img-card">
                        <img
                            src="/images/android/oneui_home.webp"
                            alt="One UI Home screen"
                        />
                        <p>One UI Home Screen</p>
                    </div>
                    <div class="img-card">
                        <img
                            src="/images/android/oneui_settings.webp"
                            alt="One UI Settings screen"
                        />
                        <p>One UI Settings</p>
                    </div>
                </div>
                <div class="side-by-side">
                    <div class="img-card">
                        <img
                            src="/images/android/oxygenos_home.webp"
                            alt="Oxygen OS Home screen"
                        />
                        <p>Oxygen OS Home Screen</p>
                    </div>
                    <div class="img-card">
                        <img
                            src="/images/android/oxygenos_settings.webp"
                            alt="Oxygen OS Settings screen"
                        />
                        <p>Oxygen OS Settings</p>
                    </div>
                    
                </div>
            </div>
        </Section>
    </div>
</BaseLayout>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }

    .content {
        padding: var(--padding);
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }

    .side-by-side {
        display: flex;
        gap: 8px;
        margin: auto;
    }

    .img-card {
        display: flex;
        flex-direction: column;
    }

    .img-card img {
        max-width: 300px;
        height: auto;
        object-fit: contain;
        flex: 1;
    }

    .img-card p {
        font-weight: 600;
        text-align: center;
    }

    p {
        text-align: justify;
        margin: 0;
    }

    i {
        font-weight: 500;
    }
</style>
