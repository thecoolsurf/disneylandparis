export const Field = (props) => {

    if (props.type === 'hidden') {
        return (
            <input key={props.name} type="hidden" name={props.name} defaultValue={props.value} />
        )
    }
    if (props.type === 'text') {
        return (
            <p key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <input type="text" id={props.name} name={props.name} defaultValue={props.value} />
            </p>
        )
    }
    if (props.type === 'tel') {
        return (
            <p key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <input type="tel" id={props.name} name={props.name} pattern="[0-9]{2}(-[0-9]{2}){4}" defaultValue={props.value} />
            </p>
        )
    }
    if (props.type === 'password') {
        return (
            <p key={props.name} className="item">
                <label htmlFor={props.name}>{props.name} (min 8 caracters)</label>
                <input type="password" id={props.name} name={props.name} defaultValue={props.value} minLength="8" required />
            </p>
        )
    }
    if (props.type === 'textarea') {
        return (
            <p key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <textarea id={props.name} name={props.name} rows="15" cols="40" defaultValue={props.value} />
            </p>
        )
    }
    if (props.type === 'select') {
        return (
            <p key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <select id={props.name} name={props.name}>
                    <option value="">--choose an option--</option>
                    {props.chooser.map((el) => {
                        const selected = (props.value === el.id) ? 'selected' : '';
                        return (
                            <option key={el.id} value={el.id} selected={selected}>{el.name}</option>
                        )
                    })}
                </select>
            </p>
        )
    }
    if (props.type === 'date') {
        let value = props.value.slice(0,10);
        return (
            <p key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <input type="date" id={props.name} name={props.name} defaultValue={value} />
            </p>

        )
    }
    
}