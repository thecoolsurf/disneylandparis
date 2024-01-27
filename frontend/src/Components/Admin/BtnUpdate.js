export const BtnUpdate = (props) => {
    return (
        <div className="btn">
            <a className="button" href={'/admin/entity/update/' + props.uri + '?id=' + props.id}>Update</a>
        </div>
    )
}