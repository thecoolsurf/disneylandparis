import './listing.css';

export const ListLogos = (props) => {
    return (
        <div className="list-logos">
            {props.datas.map((e) => {
                return (
                    <a className="link" href={'/park/' + props.pslug + '/univers/' + props.uslug + '/attraction/' + e.slug} alt={e.name}>
                        <div className={'logos logo-' + e.slug}></div>
                    </a>
                )
            })}
        </div>
    )
}