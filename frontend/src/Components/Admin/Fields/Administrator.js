import { Field } from '../Field.js';

export const Administrator = (props) => {
    return (
        <>
            <Field type="text" name="firstname" value={props.e.firstname} />
            <Field type="text" name="lastname" value={props.e.lastname} />
            <Field type="text" name="email" value={props.e.email} />
            <Field type="password" name="password" value={props.e.password} />
            <Field type="text" name="token" value={props.e.token} />
            <Field type="hidden" name="id" value={props.e.id} />
        </>
    )
}