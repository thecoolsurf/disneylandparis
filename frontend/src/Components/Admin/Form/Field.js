export const Field = (props) => {

    if (props.type === 'hidden') {
        return (
            <input key={props.name} type="hidden" name={props.name} defaultValue={props.value} />
        )
    }
    if (props.type === 'text') {
        return (
            <div key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <input type="text" id={props.name} name={props.name} defaultValue={props.value} />
            </div>
        )
    }
    if (props.type === 'tel') {
        return (
            <div key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <input type="tel" id={props.name} name={props.name} pattern="[0-9]{2}(-[0-9]{2}){4}" defaultValue={props.value} />
            </div>
        )
    }
    if (props.type === 'password') {
        return (
            <div key={props.name} className="item">
                <label htmlFor={props.name}>{props.name} (min 8 caracters)</label>
                <input type="password" id={props.name} name={props.name} defaultValue={props.value} minLength="8" required />
            </div>
        )
    }
    if (props.type === 'textarea') {
        return (
            <div key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <textarea id={props.name} name={props.name} rows="15" cols="40" defaultValue={props.value} />
            </div>
        )
    }
    if (props.type === 'select') {
        return (
            <div key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <select id={props.name} name={props.name}>
                    <option value="">-- choose option --</option>
                    {props.chooser.map((el) => {
                        const selected = (props.value === el.id) ? 'selected' : '';
                        return (
                            <option key={el.id} value={el.id} selected={selected}>{el.name}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
    if (props.type === 'checkbox') {
        const inputName = props.name.slice(0, props.name.length - 1);
        const target = document.getElementById(props.name);
        const values = props.value ? props.value.split(',') : props.value;
        return (
            <div key={props.name} className="item">
                <label>{props.name}</label>
                {props.chooser.map((el) => {
                    const active = props.value && props.value.includes(el.id) ? 'active-check' : 'default';
                    return (
                        <div key={el.name} className="list-checkbox">
                            <input type="checkbox" name={inputName} defaultValue={el.id} onClick={(e) => {
                                if (values.includes(e.target.value)) {
                                    values.splice(values.indexOf(el.id), 1);
                                    e.target.checked = false;
                                } else {
                                    values.push(String(el.id));
                                    e.target.checked = true;
                                }
                                target.value = values.join(',');
                            }} />
                            <label htmlFor={el.name} className={active}>{el.name} ({el.id})</label>
                        </div>
                    )
                })}
                <input className="control" type="text" id={props.name} name={props.name} value={values} />
            </div>
        )
    }
    if (props.type === 'date') {
        let value = props.value ? props.value.slice(0, 10) : '';
        return (
            <div key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <input type="date" id={props.name} name={props.name} defaultValue={value} />
            </div>

        )
    }

}