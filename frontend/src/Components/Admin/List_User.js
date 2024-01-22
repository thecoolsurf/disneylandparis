export const List_User = (props) => {
    return (
        <div key={props.e.id} className="row">
            <div className="id">{props.e.id}</div>
            <div className="item">{props.e.firstname + ' ' + props.e.lastname}</div>
            <div className="btn">
                <a href={'/admin/delete?uri=' + props.uri + '&id=' + props.e.id}>Delete</a>
            </div>
            <div className="btn">
                <a href={'/admin/update/' + props.uri + '?id=' + props.e.id}>Update</a>
            </div>
        </div>
    )
}