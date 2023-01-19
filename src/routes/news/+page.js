import { error } from '@sveltejs/kit';

export async function load() {
    let post;

    try {
        post = await import('$content/news.md');
    } catch (e) {
        throw error(404);
    }

    let { default: body, metadata } = post;
    let lastUpdated = new Date(metadata.lastUpdated);

    metadata.lastUpdated = lastUpdated;

    if (!body) {
        return {
            status: 404,
        };
    }

    return {
        body: body,
        ...metadata
    };
}