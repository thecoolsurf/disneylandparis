export const Attraction = (props) => {
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
                <label>Public</label>
                <input type="text" name="public" defaultValue={props.e.public} />
            </p>
            <p className="item">
                <label>Description</label>
                <textarea name="description" rows="10" cols="50">{props.e.description}</textarea>
            </p>
            <p className="item">
                <label>Restriction</label>
                <input type="text" name="restriction" defaultValue={props.e.restriction} />
            </p>
            <p className="item">
                <label>Pictures</label>
                <input type="text" name="pictures" defaultValue={props.e.pictures} />
            </p>
            <p className="item">
                <label>Movies</label>
                <input type="text" name="movies" defaultValue={props.e.movies} />
            </p>
        </>
    )
}