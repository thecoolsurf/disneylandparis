export const Field = (props) => {
    if (props.type === 'hidden') {
        return (
            <input type="hidden" name={props.name} defaultValue={props.value} />
        )
    }
    if (props.type === 'text') {
        return (
            <p className="item">
                <label>{props.name}</label>
                <input type="text" name={props.name} defaultValue={props.value} />
            </p>
        )
    }
    if (props.type === 'textarea') {
        return (
            <p className="item">
                <label>{props.name}</label>
                <textarea name={props.name} rows="10" cols="50">{props.value}</textarea>
            </p>
        )
    }
}