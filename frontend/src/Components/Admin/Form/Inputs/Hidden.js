export const Hidden = (props) => {
    const name = props.name;
    const value = props.value;
    return (
        <input key={name} type="hidden" name={name} defaultValue={value} />
    )
}