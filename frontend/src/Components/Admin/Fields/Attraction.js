import { Field } from '../Field.js';

export const Attraction = (props) => {
    return (
        <>
            <Field key="id_park" type="select" name="id_park" chooser={props.parks} value={props.e.id_park} />
            <Field key="id_univ" type="select" name="id_univ" chooser={props.univers} value={props.e.id_univ} />
            <Field key="slug" type="text" name="slug" value={props.e.slug} />
            <Field key="name" type="text" name="name" value={props.e.name} />
            <Field key="public" type="text" name="public" value={props.e.public} />
            <Field key="restriction" type="text" name="restriction" value={props.e.restriction} />
            <Field key="description" type="textarea" name="description" value={props.e.description} />
            <Field key="pictures" type="text" name="pictures" value={props.e.pictures} />
            <Field key="movies" type="text" name="movies" value={props.e.movies} />
            
            <Field key="id" type="hidden" name="id" value={props.e.id} />
        </>
    )
}