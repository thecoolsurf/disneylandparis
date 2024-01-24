export const BtnUpdate = (props) => {
    return (
        <div className="btn">
            <a href={'/admin/entity/form/' + props.uri + '?id=' + props.id}>Update</a>
        </div>
    )
}