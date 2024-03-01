import { Date } from '../../Form/Inputs/Date.js';
import { Phone } from '../../Form/Inputs/Phone.js'
import { Text } from '../../Form/Inputs/Text.js';
import { Password } from '../../Form/Inputs/Password.js';
import { Hidden } from '../../Form/Inputs/Hidden.js';

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
            <Text name="firstname" value={firstname.toLowerCase()} />
            <Text name="lastname" value={lastname.toUpperCase()} />
            <Text name="email" value={email} />
            <Phone name="mobile" value={mobile} />
            <Password name="password" value={password} />
            <Date name="born" value={born} />
            <Date name="date_start" value={date_start} />
            <Date name="date_end" value={date_end} />
            <Date name="date_current" value={date_current} />
            <Text name="address" value={address} />
            <Text name="zipcode" value={zipcode} />
            <Text name="city" value={city.toUpperCase()} />
            <Text name="country" value={country} />
            <Hidden name="id" value={id} />
        </>
    )
}