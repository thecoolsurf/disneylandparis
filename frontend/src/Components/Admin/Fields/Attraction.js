export const Attraction = (props) => {
    return (
        <>
            <input type="hidden" name="id" value={props.e.id} />
            <p className="item">
                <label>Slug</label>
                <input type="text" name="slug" value={props.e.slug} />
            </p>
            <p className="item">
                <label>Name</label>
                <input type="text" name="name" value={props.e.name} />
            </p>
            <p className="item">
                <label>Public</label>
                <input type="text" name="public" value={props.e.public} />
            </p>
            <p className="item">
                <label>Description</label>
                <textarea name="description" rows="10" cols="50">{props.e.description}</textarea>
            </p>
            <p className="item">
                <label>Restriction</label>
                <input type="text" name="restriction" value={props.e.restriction} />
            </p>
            <p className="item">
                <label>Pictures</label>
                <input type="text" name="pictures" value={props.e.pictures} />
            </p>
            <p className="item">
                <label>Movies</label>
                <input type="text" name="movies" value={props.e.movies} />
            </p>
        </>
    )
}