import { Field } from '../Field.js';

export const Administrator = (props) => {
    return (
        <>
            <Field key="firstname" type="text" name="firstname" value={props.e.firstname} />
            <Field key="lastname" type="text" name="lastname" value={props.e.lastname} />
            <Field key="email" type="text" name="email" value={props.e.email} />
            <Field key="password" type="password" name="password" value={props.e.password} />
            <Field key="token" type="text" name="token" value={props.e.token} />
            
            <Field key="id" type="hidden" name="id" value={props.e.id} />
        </>
    )
}