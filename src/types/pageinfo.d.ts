export type PageInfo = {
    seo: {
        title: string,
        description: string
    },
    content: {
        title: string,
        subtitle: string,
        description: Array<string>
    },
    activeRoutes: Array<string>
}