export const BlockTotal = (props) => {
    return (
        <li className="total">
            <div>{props.total + ' ' + props.label}</div>
        </li>
    )
}