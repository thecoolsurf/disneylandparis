export const BlockLabelName = (props) => {
    if (props.icon) {
        return (
        <li className="items-2">
            <i class={'icon '+props.icon} aria-hidden="true"></i>
            <div className="item">
                <div className="label">{props.label}</div>
                <div className="name">{props.name}</div>
            </div>
        </li>
        )
    } else {
        return (
            <li className="items-2">
                <div className="item">
                    <div className="label">{props.label}</div>
                    <div className="name">{props.name}</div>
                </div>
            </li>
        )
    }
}