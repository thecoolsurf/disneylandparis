export const Checkbox = (props) => {
    const name = props.name;
    const value = props.value;
    const inputName = name.slice(0, name.length - 1);
    const target = document.getElementById(props.name);
    const values = value ? value.split(',') : value;
    const chooser = props.chooser;
    return (
        <div key={name} className="item">
            <label>{name}</label>
            {chooser.map((el) => {
                const active = value && value.includes(el.id) ? 'active-check' : 'default';
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
            <input className="control" type="text" id={name} name={name} value={values} />
        </div>
    )
}