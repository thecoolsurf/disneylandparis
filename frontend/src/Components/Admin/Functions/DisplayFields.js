/* ENtities */
import { Administrator } from "../Fields/Entities/Administrator.js";
import { Attraction } from "../Fields/Entities/Attraction.js";
import { Park } from "../Fields/Entities/Park.js";
import { Univers } from "../Fields/Entities/Univers.js";
import { User } from "../Fields/Entities/User.js";
/* Attributes */
import { Category } from '../Fields/Attributes/Category.js';
import { Evacuation } from "../Fields/Attributes/Evacuation.js";
import { Handicap } from "../Fields/Attributes/Handicap.js";
import { Height } from "../Fields/Attributes/Height.js";
import { Interest } from "../Fields/Attributes/Interest.js";
import { Photopass } from '../Fields/Attributes/Photopass.js';
import { Pmr } from '../Fields/Attributes/Pmr.js';
import { Premieraccess } from '../Fields/Attributes/Premieraccess.js';
import { Public } from '../Fields/Attributes/Public.js';
import { Sensory } from "../Fields/Attributes/Sensory.js";

export const DisplayFields = (props) => {
    const el = props.el ? props.el : '';
    /* Entities */
    if (props.uri === 'administrator') return (<Administrator key="administrator" e={el} />);
    if (props.uri === 'attraction') return (<Attraction key="attraction" e={el} />);
    if (props.uri === 'park') return (<Park key="park" e={el} />)
    if (props.uri === 'univers') return (<Univers key="univers" e={el} />)
    if (props.uri === 'user') return (<User key="user" e={el} />)
    /* Attributes */
    if (props.uri === 'category') return (<Category key="category" e={el} />)
    if (props.uri === 'evacuation') return (<Evacuation key="evaluation" e={el} />)
    if (props.uri === 'handicap') return (<Handicap key="handicap" e={el} />)
    if (props.uri === 'height') return (<Height key="height" e={el} />)
    if (props.uri === 'interest') return (<Interest key="interest" e={el} />)
    if (props.uri === 'photopass') return (<Photopass key="photopass" e={el} />)
    if (props.uri === 'pmr') return (<Pmr key="pmr" e={el} />)
    if (props.uri === 'premieraccess') return (<Premieraccess key="premieraccess" e={el} />)
    if (props.uri === 'public') return (<Public key="public" e={el} />)
    if (props.uri === 'sensory') return (<Sensory key="sensory" e={el} />)
    if (props.uri === '') return (<Administrator key="administrator" e={el} />)
}