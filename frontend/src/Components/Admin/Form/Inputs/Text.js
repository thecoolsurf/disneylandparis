export const Text = (props) => {
    const name = props.name;
    const value = props.value;
    return (
        <div key={name} className="item">
            <label htmlFor={name}>{name}</label>
            <input type="text" id={name} name={name} defaultValue={value} />
        </div>
    )
}