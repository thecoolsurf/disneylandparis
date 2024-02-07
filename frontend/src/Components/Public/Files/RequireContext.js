export const RequireContext = () => {
    const uri = window.location.href;
    if (uri.includes('adventure-isle')) {
        return require.context('../../../assets/images/attractions/park/adventure-isle/img', true);
    }
    if (uri.includes('alice-s-curious-labyrinth')) {
        return require.context('../../../assets/images/attractions/park/alice-s-curious-labyrinth/img',true);
    }
    if (uri.includes('autopia')) {
        return require.context('../../../assets/images/attractions/park/autopia/img',true);
    }
    if (uri.includes('big-thunder-mountain')) {
        return require.context('../../../assets/images/attractions/park/big-thunder-mountain/img',true);
    }
}