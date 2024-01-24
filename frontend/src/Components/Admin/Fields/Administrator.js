import { Field } from '../Field.js';

export const Administrator = (props) => {
    return (
        <>
            <Field type="text" name="admin" value={props.e.name} />
            <Field type="text" name="password" value={props.e.password} />
            <Field type="hidden" name="id" value={props.e.id} />
        </>
    )
}