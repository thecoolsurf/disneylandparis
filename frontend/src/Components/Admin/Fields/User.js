import { Field } from '../Field.js';

export const User = (props) => {
    return (
        <>
            <Field type="text" name="firstname" value={props.e.firstname} />
            <Field type="text" name="lastname" value={props.e.lastname} />
            <Field type="text" name="email" value={props.e.email} />
            <Field type="text" name="password" value={props.e.password} />
            <Field type="text" name="born" value={props.e.born} />
            <Field type="text" name="date_start" value={props.e.date_start} />
            <Field type="text" name="date_end" value={props.e.date_end} />
            <Field type="hidden" name="id" value={props.e.id} />
        </>
    )
}