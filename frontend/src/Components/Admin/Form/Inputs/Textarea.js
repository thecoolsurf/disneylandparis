export const Textarea = (props) => {
    const name = props.name;
    const value = props.value;
    return (
        <div key={name} className="item">
            <label htmlFor={name}>{name}</label>
            <textarea id={name} name={name} rows="15" cols="40" defaultValue={value} />
        </div>
    )
}