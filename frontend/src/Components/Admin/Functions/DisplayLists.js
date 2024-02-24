/* ENtities */
import { Administrator } from "../Lists/Entities/Administrator.js";
import { Attraction } from "../Lists/Entities/Attraction.js";
import { Park } from "../Lists/Entities/Park.js";
import { Univers } from "../Lists/Entities/Univers.js";
import { User } from "../Lists/Entities/User.js";
/* Attributes */
import { Category } from '../Lists/Attributes/Category.js';
import { Evacuation } from "../Lists/Attributes/Evacuation.js";
import { Handicap } from "../Lists/Attributes/Handicap.js";
import { Height } from "../Lists/Attributes/Height.js";
import { Interest } from "../Lists/Attributes/Interest.js";
import { Photopass } from '../Lists/Attributes/Photopass.js';
import { Pmr } from '../Lists/Attributes/Pmr.js';
import { Premieraccess } from '../Lists/Attributes/Premieraccess.js';
import { Public } from '../Lists/Attributes/Public.js';
import { Sensory } from "../Lists/Attributes/Sensory.js";
import { Singlerider } from "../Lists/Attributes/Singlerider.js";

export const DisplayLists = (props) => {
    const uri = props.uri;
    const datas = props.datas;
    /* Entities */
    if (props.uri === 'administrator') return (<Administrator datas={datas} uri={uri} />);
    if (props.uri === 'attraction') return (<Attraction datas={datas} uri={uri} />);
    if (props.uri === 'park') return (<Park datas={datas} uri={uri} />);
    if (props.uri === 'univers') return (<Univers datas={datas} uri={uri} />);
    if (props.uri === 'user') return (<User datas={datas} uri={uri} />);
    /* Attributes */
    if (props.uri === 'category') return (<Category datas={datas} uri={uri} />);
    if (props.uri === 'evacuation') return (<Evacuation datas={datas} uri={uri} />);
    if (props.uri === 'handicap') return (<Handicap datas={datas} uri={uri} />);
    if (props.uri === 'height') return (<Height datas={datas} uri={uri} />);
    if (props.uri === 'interest') return (<Interest datas={datas} uri={uri} />);
    if (props.uri === 'photopass') return (<Photopass datas={datas} uri={uri} />);
    if (props.uri === 'pmr') return (<Pmr datas={datas} uri={uri} />);
    if (props.uri === 'premieraccess') return (<Premieraccess datas={datas} uri={uri} />);
    if (props.uri === 'public') return (<Public datas={datas} uri={uri} />);
    if (props.uri === 'sensory') return (<Sensory datas={datas} uri={uri} />);
    if (props.uri === 'singlerider') return (<Singlerider datas={datas} uri={uri} />);
}