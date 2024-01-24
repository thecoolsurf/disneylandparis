import { Field } from '../Field.js';

export const Park = (props) => {
    return (
        <>
            <Field type="text" name="slug" value={props.e.slug} />
            <Field type="text" name="name" value={props.e.name} />
            <Field type="textarea" name="description" value={props.e.description} />
            <Field type="hidden" name="id" value={props.e.id} />
        </>
    )
}