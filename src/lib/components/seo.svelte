<script>
    /** @type string */
    export let title;

    /** @type string */
    export let description;

    /** @type string */
    export let url;

    /** @type boolean */
    export let article = false;

    /** @type string */
    export let datePublished = "";

    /** @type string */
    export let lastUpdated = "";

    /** @type string */
    export let imgUrl = "";

    /** @type number */
    export let imgWidth = 0;

    /** @type number */
    export let imgHeight = 0;

    /** @type string */
    export let imgAlt = "";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta property="og:site_name" content="Firehawk's Corner}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={article ? "article" : "website"} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {#if imgUrl}
        <meta property="og:image" content={imgUrl} />
    {/if}
    {#if imgWidth}
        <meta property="og:image:width" content={imgWidth.toString()} />
    {/if}
    {#if imgHeight}
        <meta property="og:image:height" content={imgHeight.toString()} />
    {/if}
    {#if imgAlt}
        <meta property="og:image:alt" content={imgAlt} />
    {/if}
    {#if article}
        <meta property="article:publisher" content="Firehawk" />
        <meta property="article:author" content="Firehawk" />
        {#if datePublished !== ""}
            <meta property="article:published_time" content={datePublished} />
        {/if}
        {#if lastUpdated !== ""}
            <meta property="article:modified_time" content={lastUpdated} />
        {/if}
    {/if}
</svelte:head>
