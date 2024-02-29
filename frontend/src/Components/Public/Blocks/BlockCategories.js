/*
@props label string
@props datas array
*/

export const BlockCategories = (props) => {
    return (
        <li className="items-1">
            <div className="total">Attractions par catégories</div>
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