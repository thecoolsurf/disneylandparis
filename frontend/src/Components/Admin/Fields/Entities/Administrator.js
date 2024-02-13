import { Field } from '../../Items/Field.js';

export const Administrator = (props) => {
    const firstname = (props.e) ? props.e.firstname : '';
    const lastname = (props.e) ? props.e.lastname : '';
    const email = (props.e) ? props.e.email : '';
    const password = (props.e) ? props.e.password : '';
    const token = (props.e) ? props.e.token : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field key="firstname" type="text" name="firstname" value={firstname} />
            <Field key="lastname" type="text" name="lastname" value={lastname} />
            <Field key="email" type="text" name="email" value={email} />
            <Field key="password" type="password" name="password" value={password} />
            <Field key="token" type="text" name="token" value={token} />
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}