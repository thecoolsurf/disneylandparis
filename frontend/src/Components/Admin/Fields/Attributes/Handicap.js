import { Field } from '../../Items/Field.js';

export const Handicap = (props) => {
    const name = (props.e) ? props.e.name : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field type="text" name="name" value={name} />
            <Field type="textarea" name="description" value={description} />
            <Field type="hidden" name="id" value={id} />
        </>
    )
}