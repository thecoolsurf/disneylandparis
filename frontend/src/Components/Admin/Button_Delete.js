export const Button_Delete = (props) => {
    return (
        <div className="btn">
            <a href={'/admin/entity/delete/' + props.uri + '?id=' + props.id}>Delete</a>
        </div>
    )
}