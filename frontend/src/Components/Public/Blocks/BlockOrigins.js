/*
@props label string
@props datas array
*/

export const BlockOrigins = (props) => {
    return (
        <li className="items-1">
            <div className="total">Attractions par origines</div>
            {props.datas.map((o) => {
                return (
                    <div className="item" key={o.oslug}>
                        <a href={o.oroute} alt={o.oname} className="item" key={o.oslug}>
                            <div className="cname">{o.oname}</div>
                        </a>
                    </div>
                )
            })}
        </li>
    )
}