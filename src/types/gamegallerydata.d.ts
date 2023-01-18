export type GameGalleryData = Array<{
    img: {
        src: string,
        alt: string
    },
    name: string,
    description: Array<string>
}>;