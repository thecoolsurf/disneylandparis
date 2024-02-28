/*
@props label string
@props datas array
*/

export const BlockCategories = (props) => {
    if (props.label === 'home-categories') {
        return (
            <li className="items-1">
                <div className="total">Toutes les attractions par catégories</div>
                {props.datas.map((c) => {
                    return (
                        <div className="item">
                            <a href={c.croute} alt={c.cname} className="item" key={c.cslug}>
                                <div className="cname">{c.cname}</div>
                            </a>
                        </div>
                    )
                })}
            </li>
        )
    }
    if (props.label === 'park-categories') {
        return (
            <li className="items-2">
                <div className="total">{props.datas.length + ' catégories'}</div>
                {props.datas.map((c) => {
                    return (
                        <div className="item" key={c.cslug}>
                            <div className="tt">{c.total}</div>
                            <div className="cname">{c.cname}</div>
                        </div>
                    )
                })}
            </li>
        )
    }
    if (props.label === 'univers-categories') {
        return (
            <li className="items-2">
                <div className="total">{props.datas.length + ' catégories'}</div>
                {props.datas.map((c) => {
                    return (
                        <div className="item" key={c.cslug}>
                            <div className="tt">{c.total}</div>
                            <div className="cname">{c.cname}</div>
                        </div>
                    )
                })}
            </li>
        )
    }
}