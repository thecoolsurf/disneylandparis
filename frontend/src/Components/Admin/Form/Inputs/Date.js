export const Date = (props) => {
    const name = props.name;
    const value = props.value ? props.value.slice(0, 10) : '';
    return (
        <div key={name} className="item">
            <label htmlFor={name}>{name}</label>
            <input type="date" id={name} name={name} defaultValue={value} />
        </div>
    )
}