export const BtnDelete = (props) => {
    return (
        <form className="form-btn" action={`http://localhost:80/admin/delete/${props.uri}`} method="POST" encType="application/x-www-form-urlencoded">
            <input type="hidden" name="id" defaultValue={props.id} />
            <input type="submit" name="delete" value="Delete" className="button" />
        </form>
    )
}