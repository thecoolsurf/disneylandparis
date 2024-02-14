import { useState } from 'react';

export const Field = (props) => {
    const [checked, setChecked] = useState(false);

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
        let input_name = props.name.slice(0,props.name.length-1);
        let values = '';
        return (
            <div key={props.name} className="item">
                <label>{props.name}</label>
                {props.chooser.map((el) => {
                    const checked = (props.value === el.id) ? 'checked' : '';
                    return (
                        <div key={el.name} className="list-checkbox">
                            <input type="checkbox" name={props.name} value={el.id} checked={checked} onChange={e =>{setChecked(true)}} />
                            <label htmlFor={el.name}>{el.name}</label>
                        </div>
                    )
                })}
                <input type="hidden" id={props.name} name={input_name} value={values} />
            </div>
        )
    }
    if (props.type === 'date') {
        let value = props.value.slice(0, 10);
        return (
            <p key={props.name} className="item">
                <label htmlFor={props.name}>{props.name}</label>
                <input type="date" id={props.name} name={props.name} defaultValue={value} />
            </p>

        )
    }

}