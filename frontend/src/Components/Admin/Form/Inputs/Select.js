export const Select = (props) => {
    const name = props.name;
    const value = props.value;
    const chooser = props.chooser;
    return (
        <div key={name} className="item">
            <label htmlFor={name}>{name}</label>
            <select id={name} name={name}>
                <option value="">-- choose option --</option>
                {chooser.map((el) => {
                    const selected = (value === el.id) ? 'selected' : '';
                    return (
                        <option key={el.id} value={el.id} selected={selected}>{el.name}</option>
                    )
                })}
            </select>
        </div>
    )
}