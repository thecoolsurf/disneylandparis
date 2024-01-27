export const BtnUpdate = (props) => {
    return (
        <div className="btn">
            <a href={'/admin/entity/update/' + props.uri + '?id=' + props.id}>Update</a>
        </div>
    )
}