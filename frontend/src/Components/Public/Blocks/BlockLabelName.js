export const BlockLabelName = (props) => {
    return (
        <li className="items-2">
            <div className="item">
                <div className="label">{props.label}</div>
                <div className="name">{props.name}</div>
            </div>
        </li>
    )
}