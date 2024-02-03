export const BlockCollection = (props) => {
    if (props.label === 'univers') {
        return (
            <li className="items-1">
                {props.datas.map((u) => {
                    return (
                        <div className="item" key={u.uslug}>
                            {u.uname}
                        </div>
                    )
                })}
            </li>
        )
    }
    if (props.label === 'univers-link') {
        return (
            <li className="items-1">
                {props.datas.map((u) => {
                    const href = '/park/' + u.pslug + '/univers/' + u.uslug;
                    return (
                        <div className="item" key={u.uslug}>
                            <a href={href} alt={u.uname}>{u.uname}</a>
                        </div>
                    )
                })}
            </li>
        )
    }
    if (props.label === 'attraction') {
        const parent_href = window.location.href;
        return (
            <li className="items-2">
                {props.datas.map((a) => {
                    const href = parent_href + '/attraction/' + a.aslug;
                    return (
                        <div className="item" key={a.aslug}>
                            <a href={href} alt={a.aname}>{a.aname}</a>
                        </div>
                    )
                })}
            </li>

        )
    }
}