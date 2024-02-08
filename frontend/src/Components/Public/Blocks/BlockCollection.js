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
    /* page univers */
    if (props.label === 'univers-link') {
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
    /* page attraction */
    if (props.label === 'attraction-link') {
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