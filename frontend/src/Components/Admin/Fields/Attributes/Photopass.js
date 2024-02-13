import { Field } from '../../Items/Field.js';

export const Photopass = (props) => {
    const name = (props.e) ? props.e.name : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field type="text" name="name" value={name} />
            <Field type="hidden" name="id" value={id} />
        </>
    )
}