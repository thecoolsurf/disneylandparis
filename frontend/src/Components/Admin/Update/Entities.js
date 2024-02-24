/* Entities */
import { Administrator } from "./Entity/Administrator.js";
import { Attraction } from "./Entity/Attraction.js";
import { Park } from "./Entity/Park.js";
import { Univers } from "./Entity/Univers.js";
import { User } from "./Entity/User.js";

export const Entities = (props) => {
    const el = props.e ? props.e : [];
    switch (props.uri) {
        case 'administrator':
            return (<Administrator key="administrator" e={el} />);
        case 'attraction':
            return (<Attraction key="attraction" e={el} />);
        case 'park':
            return (<Park key="park" e={el} />)
        case 'univers':
            return (<Univers key="univers" e={el} />)
        case 'user':
            return (<User key="user" e={el} />);
        default:
            return (<></>)
    }
}