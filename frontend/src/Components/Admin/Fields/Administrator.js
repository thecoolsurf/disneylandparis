export const Administrator = (props) => {
    return (
        <>
            <input type="hidden" name="id" value={props.e.id} />
            <p className="item">
                <label>Admin</label>
                <input type="text" name="admin" value={props.e.name} />
            </p>
            <p className="item">
                <label>Password</label>
                <input type="text" name="password" value={props.e.password} />
            </p>
        </>
    )
}