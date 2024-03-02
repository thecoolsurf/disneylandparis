/*
@param slug
@param legend
*/
export const BlockLogo = (props) => {
    const uri = window.location.href;
    if (uri.includes('park') | uri.includes('walt')) {
        /* park | univers */
        return (
            <div className="bloc-logo">
                <div className="logo icons-disneylandparis">
                    <div className={'icon icon-' + props.slug}></div>
                    <div className="legend">{props.legend}</div>
                </div>
            </div>
        )
    } else {
        /* home */
        return (
            <a className="bloc-logo" href={props.href} alt={props.legend}>
                <div className="logo">
                    <div className={'icon icon-' + props.slug}></div>
                    <div className="legend">{props.legend}</div>
                </div>
            </a>
        )
    }
}