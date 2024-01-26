import { Field } from '../Field.js';

export const User = (props) => {
    return (
        <>
            <Field key="firstname" type="text" name="firstname" value={props.e.firstname.toLowerCase()} />
            <Field key="lastname" type="text" name="lastname" value={props.e.lastname.toUpperCase()} />
            <Field key="email" type="text" name="email" value={props.e.email} />
            <Field key="mobile" type="tel" name="mobile" value={props.e.mobile} />
            <Field key="password" type="password" name="password" value={props.e.password} />
            <Field key="born" type="date" name="born" value={props.e.born} />
            <Field key="date_start" type="date" name="date_start" value={props.e.date_start} />
            <Field key="date_end" type="date" name="date_end" value={props.e.date_end} />
            <Field key="date_current" type="date" name="date_current" value={props.e.date_current} />
            <Field key="address" type="text" name="address" value={props.e.address} />
            <Field key="zipcode" type="text" name="zipcode" value={props.e.zipcode} />
            <Field key="city" type="text" name="city" value={props.e.city.toUpperCase()} />
            <Field key="country" type="text" name="country" value={props.e.country} />
            
            <Field key="id" type="hidden" name="id" value={props.e.id} />
        </>
    )
}