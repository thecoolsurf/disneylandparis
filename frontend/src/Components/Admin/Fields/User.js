import { Field } from '../Field.js';

export const User = (props) => {
    const firstname = (props.e) ? props.e.firstname : '';
    const lastname = (props.e) ? props.e.lastname : '';
    const email = (props.e) ? props.e.email : '';
    const mobile = (props.e) ? props.e.mobile : '';
    const password = (props.e) ? props.e.password : '';
    const born = (props.e) ? props.e.born : '';
    const date_start = (props.e) ? props.e.date_start : '';
    const date_end = (props.e) ? props.e.date_end : '';
    const date_current = (props.e) ? props.e.date_current : '';
    const address = (props.e) ? props.e.address : '';
    const zipcode = (props.e) ? props.e.zipcode : '';
    const city = (props.e) ? props.e.city : '';
    const country = (props.e) ? props.e.country : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field key="firstname" type="text" name="firstname" value={firstname.toLowerCase()} />
            <Field key="lastname" type="text" name="lastname" value={lastname.toUpperCase()} />
            <Field key="email" type="text" name="email" value={email} />
            <Field key="mobile" type="tel" name="mobile" value={mobile} />
            <Field key="password" type="password" name="password" value={password} />
            <Field key="born" type="date" name="born" value={born} />
            <Field key="date_start" type="date" name="date_start" value={date_start} />
            <Field key="date_end" type="date" name="date_end" value={date_end} />
            <Field key="date_current" type="date" name="date_current" value={date_current} />
            <Field key="address" type="text" name="address" value={address} />
            <Field key="zipcode" type="text" name="zipcode" value={zipcode} />
            <Field key="city" type="text" name="city" value={city.toUpperCase()} />
            <Field key="country" type="text" name="country" value={country} />
            
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}