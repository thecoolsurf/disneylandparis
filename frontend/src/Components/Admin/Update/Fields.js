/* Entities */
import { Administrator } from "./Entities/Administrator.js";
import { Attraction } from "./Entities/Attraction.js";
import { Park } from "./Entities/Park.js";
import { Univers } from "./Entities/Univers.js";
import { User } from "./Entities/User.js";
/* Attributes */
import { Category } from './Attributes/Category.js';
import { Evacuation } from './Attributes/Evacuation.js';
import { Handicap } from './Attributes/Handicap.js';
import { Height } from './Attributes/Height.js';
import { Interest } from './Attributes/Interest.js';
import { Photopass } from './Attributes/Photopass.js';
import { Pmr } from './Attributes/Pmr.js';
import { Premieraccess } from './Attributes/Premieraccess.js';
import { Public } from './Attributes/Public.js';
import { Sensory } from './Attributes/Sensory.js';
import { Singlerider } from './Attributes/Singlerider.js';

export const Fields = (props) => {
    const uri = props.uri;
    const el = props.e ? props.e : [];
    switch (props.uri) {

        /* entity */
        case 'administrator':
            return (<Administrator key={uri} e={el} />);
        case 'attraction':
            return (<Attraction key={uri} e={el} />);
        case 'park':
            return (<Park key={uri} e={el} />)
        case 'univers':
            return (<Univers key={uri} e={el} />)
        case 'user':
            return (<User key={uri} e={el} />);

        /* attribute */
        case 'category':
            return (<Category key={uri} e={el} />);
        case 'evacuation':
            return (<Evacuation key={uri} e={el} />);
        case 'handicap':
            return (<Handicap key={uri} e={el} />);
        case 'height':
            return (<Height key={uri} e={el} />);
        case 'interest':
            return (<Interest key={uri} e={el} />);
        case 'photopass':
            return (<Photopass key={uri} e={el} />);
        case 'pmr':
            return (<Pmr key={uri} e={el} />);
        case 'premieraccess':
            return (<Premieraccess key={uri} e={el} />);
        case 'public':
            return (<Public key={uri} e={el} />);
        case 'sensory':
            return (<Sensory key={uri} e={el} />);
        case 'singlerider':
            return (<Singlerider key={uri} e={el} />);
            
        default:
            return (<></>)
    }
}