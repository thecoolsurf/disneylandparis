import { Field } from '../Field.js';

export const User = (props) => {
    return (
        <>
            <Field type="text" name="firstname" value={props.e.firstname.toLowerCase()} />
            <Field type="text" name="lastname" value={props.e.lastname.toUpperCase()} />
            <Field type="text" name="email" value={props.e.email} />
            <Field type="tel" name="mobile" value={props.e.mobile} />
            <Field type="password" name="password" value={props.e.password} />
            <Field type="date" name="born" value={props.e.born} />
            <Field type="date" name="date_start" value={props.e.date_start} />
            <Field type="date" name="date_end" value={props.e.date_end} />
            <Field type="date" name="date_current" value={props.e.date_current} />
            <Field type="text" name="address" value={props.e.address} />
            <Field type="text" name="zipcode" value={props.e.zipcode} />
            <Field type="text" name="city" value={props.e.city.toUpperCase()} />
            <Field type="text" name="country" value={props.e.country} />
            
            <Field type="hidden" name="id" value={props.e.id} />
        </>
    )
}