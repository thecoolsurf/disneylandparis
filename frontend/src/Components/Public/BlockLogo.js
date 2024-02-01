/*
@params href slug legend
*/
export const BlockLogo = (props) => {
    const uri = window.location.href;
    if (uri.includes('park') | uri.includes('walt')) {
        /* all pages */
        return (
            <div className="bloc-logo">
                <div className="logo icon-disneylandparis">
                    <div className="logo icons-disneylandparis" >
                        <div className={'icon-' + props.slug}></div>
                        <div className="legend">{props.legend}</div>
                    </div>
                </div>
                <a className="back" href={props.href}><i className="fa fa-reply"></i></a>
            </div>
        )
    } else {
        /* home */
        return (
            <a className="bloc-logo" href={props.href} alt={props.legend}>
                <div className="logo icon-disneylandparis">
                    <div className="logo icons-disneylandparis" >
                        <div className={'icon-' + props.slug}></div>
                        <div className="legend">{props.legend}</div>
                    </div>
                </div>
            </a>
        )
    }
}