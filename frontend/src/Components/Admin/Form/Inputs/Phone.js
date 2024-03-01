export const Phone = (props) => {
    const name = props.name;
    const value = props.value;
    return (
        <div key={name} className="item">
            <label htmlFor={name}>{name}</label>
            <input type="tel" id={name} name={name} pattern="[0-9]{2}(-[0-9]{2}){4}" defaultValue={value} />
        </div>
    )
}