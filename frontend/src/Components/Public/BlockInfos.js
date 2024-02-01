/*
@params 
univers array
attrations array
*/
export const BlockInfos = (props) => {
    const univers = props.univers ? props.univers : [];
    const attractions = props.attractions ? props.attractions : [];
    return (
        <ul className="list">
            <li className="total">
                <div>{univers.length + ' univers'}</div>
            </li>
            <li className="items-1">
                {univers.map((u) => {
                    return (
                        <div key={u.uslug}>{u.uname}</div>
                    )
                })}
            </li>
            <li className="total">
                <div>{attractions.length + ' attractions'}</div>
            </li>
            <li className="items-2">
                {attractions.map((a) => {
                    return (
                        <div key={a.aslug}>{a.aname}</div>
                    )
                })}
            </li>
        </ul>
    )
}