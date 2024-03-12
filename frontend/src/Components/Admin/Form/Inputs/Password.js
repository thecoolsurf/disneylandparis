export const Password = (props) => {
    const name = props.data.name;
    const value = props.data.value;
    return (
        <div key={name} className="item">
            <label htmlFor={name}>{name} (min 8 caracters)</label>
            <input type="password" id={name} name={name} defaultValue={value} minLength="8" placeholder="your@email.fr" required />
        </div>
    )
}