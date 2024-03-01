import { Text } from '../../Form/Inputs/Text.js';
import { Password } from '../../Form/Inputs/Password.js';
import { Hidden } from '../../Form/Inputs/Hidden.js';

export const Administrator = (props) => {
    const firstname = (props.e) ? props.e.firstname : '';
    const lastname = (props.e) ? props.e.lastname : '';
    const email = (props.e) ? props.e.email : '';
    const password = (props.e) ? props.e.password : '';
    const token = (props.e) ? props.e.token : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Text name="firstname" value={firstname} />
            <Text name="lastname" value={lastname} />
            <Text name="email" value={email} />
            <Password name="password" value={password} />
            <Text name="token" value={token} />
            <Hidden name="id" value={id} />
        </>
    )
}