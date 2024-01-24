import { Field } from '../Field.js';

export const Attraction = (props) => {
    return (
        <>
            <Field type="select" name="id_park" chooser={props.parks} value={props.e.id_park} />
            <Field type="select" name="id_univ" chooser={props.univers} value={props.e.id_univ} />
            <Field type="text" name="slug" value={props.e.slug} />
            <Field type="text" name="name" value={props.e.name} />
            <Field type="text" name="public" value={props.e.public} />
            <Field type="text" name="restriction" value={props.e.restriction} />
            <Field type="textarea" name="description" value={props.e.description} />
            <Field type="text" name="pictures" value={props.e.pictures} />
            <Field type="text" name="movies" value={props.e.movies} />
            <Field type="hidden" name="id" value={props.e.id} />
        </>
    )
}