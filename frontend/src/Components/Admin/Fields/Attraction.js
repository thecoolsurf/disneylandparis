import { Field } from '../Field.js';

export const Attraction = (props) => {
    return (
        <>
            <Field type="text" name="id_park" value={props.e.id_park} />
            <Field type="text" name="id_univ" value={props.e.id_univ} />
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