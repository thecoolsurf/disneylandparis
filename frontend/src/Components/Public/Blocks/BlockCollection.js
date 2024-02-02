import { BlockLabelName } from './BlockLabelName.js';

export const BlockCollection = (props) => {
    if (props.label === 'univers') {
        return (
            <li className="items-1">
                {props.datas.map((u) => {
                    return (
                        <div key={u.uslug}>{u.uname}</div>
                    )
                })}
            </li>
        )
    }
    if (props.label === 'attraction') {
        return (
            <li className="items-2">
                {props.datas.map((a) => {
                    return (
                        <div key={a.aslug}>{a.aname}</div>
                    )
                })}
            </li>

        )
    }
}