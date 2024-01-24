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
                <textarea name={props.name} rows="10" cols="50" defaultValue={props.value} />
            </p>
        )
    }
    if (props.type === 'select') {
        return (
            <p className="item">
                <label>{props.name}</label>
                <select name={props.name}>
                    <option value="">--choose an option--</option>
                    {props.chooser.map((el) => {
                        const selected = el.id === props.value ? 'selected' : '';
                        return (
                            <option value={el.id} selected={selected}>{el.name}</option>
                        )
                    })}
                </select>
            </p>
        )
    }
}