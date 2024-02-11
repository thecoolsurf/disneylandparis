export const FilterBkgColor = () => {
    const uri = window.location.href;
    if (uri.includes('park-walt-disney-studios')) {
        return 'bkg-nav-studio';
    } else if (uri.includes('park-park-disneyland')) {
        return 'bkg-nav-park';
    } else {
        return 'bkg-nav-park';
    }
}