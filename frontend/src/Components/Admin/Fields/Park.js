export const Park = (props) => {
    return (
        <>
            <input type="hidden" name="id" defaultValue={props.e.id} />
            <p className="item">
                <label>Slug</label>
                <input type="text" name="slug" defaultValue={props.e.slug} />
            </p>
            <p className="item">
                <label>Name</label>
                <input type="text" name="name" defaultValue={props.e.name} />
            </p>
            <p className="item">
                <label>Description</label>
                <textarea name="description" rows="10" cols="50">{props.e.description}</textarea>
            </p>
        </>
    )
}