/*
@props label string
@props datas array
*/

export const BlockCollection = (props) => {
        /* page park */
        if (props.label === 'park-link') {
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
        /* page univers */
        return (
            <li className="items-1">
                {props.datas.map((u) => {
                    return (
                        <div className="item" key={u.uslug}>
                            <a href={u.uroute} alt={u.uname}>{u.uname}</a>
                        </div>
                    )
                })}
            </li>
        )
    }
    if (props.label === 'attraction') {
        /* page attraction */
        const parent_href = window.location.href;
        return (
            <li className="items-2">
                {props.datas.map((a) => {
                    return (
                        <div className="item" key={a.aslug}>
                            <a href={a.aroute} alt={a.aname}>{a.aname}</a>
                        </div>
                    )
                })}
            </li>

        )
    }
}