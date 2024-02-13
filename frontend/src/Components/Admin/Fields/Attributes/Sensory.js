import { Field } from '../../Items/Field.js';

export const Sensory = (props) => {
    const name = (props.e) ? props.e.name : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field type="text" name="name" value={name} />
            <Field type="textarea" name="description" value={description} />
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}