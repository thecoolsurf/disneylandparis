import { Field } from '../Field.js';

export const Univers = (props) => {
    return (
        <>
            <Field type="select" name="id_park" chooser={props.parks} value={props.e.id_park} />
            <Field type="text" name="slug" value={props.e.slug} />
            <Field type="text" name="name" value={props.e.name} />
            <Field type="textarea" name="description" value={props.e.description} />
            <Field type="hidden" name="id" value={props.e.id} />
        </>
    )
}