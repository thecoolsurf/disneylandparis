export const ImgCollection = (uri) => {
    if (uri.includes('adventure-isle')) {
        return require.context('../../../assets/images/attractions/park/adventure-isle/img', true);
    }
    if (uri.includes('alice-s-curious-labyrinth')) {
        return require.context('../../../assets/images/attractions/park/alice-s-curious-labyrinth/img',true);
    }
}