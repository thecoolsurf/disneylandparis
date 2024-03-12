export const Email = (props) => {
    const name = props.name;
    const value = props.value;
    return (
        <div key={name} className="item">
            <label htmlFor={name}>{name}</label>
            <input type="email" id={name} name={name} placeholder="example@email.com" defaultValue={value} />
        </div>
    )
}