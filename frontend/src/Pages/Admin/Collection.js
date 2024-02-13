import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { THead } from '../../Components/Admin/Items/THead.js';
/* Entities */
import { Administrator } from "../../Components/Admin/Lists/Entities/Administrator.js";
import { Attraction } from "../../Components/Admin/Lists/Entities/Attraction.js";
import { Park } from "../../Components/Admin/Lists/Entities/Park.js";
import { Univers } from "../../Components/Admin/Lists/Entities/Univers.js";
import { User } from "../../Components/Admin/Lists/Entities/User.js";
/* Attributes */
import { Category } from "../../Components/Admin/Lists/Attributes/Category.js";
import { Public } from "../../Components/Admin/Lists/Attributes/Public.js";
import { Photopass } from "../../Components/Admin/Lists/Attributes/Photopass.js";
import { Premieraccess } from "../../Components/Admin/Lists/Attributes/Premieraccess.js";
import { Pmr } from "../../Components/Admin/Lists/Attributes/Pmr.js";
import { Height } from "../../Components/Admin/Lists/Attributes/Height.js";
import { Evacuation } from "../../Components/Admin/Lists/Attributes/Evacuation.js";
import { Handicap } from "../../Components/Admin/Lists/Attributes/Handicap.js";
import { Interest } from "../../Components/Admin/Lists/Attributes/Interest.js";
import { Sensory } from "../../Components/Admin/Lists/Sensory.js";

export const AdminCollection = (props) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataAdmin = await fetch(`http://localhost:80/admin/collection/${props.uri}`);
            const datas = await dataAdmin.json();
            setDatas(datas);
        };
        fetchData();
    }, []);
    const switchComponentList = () => {
        const uri = props.uri;
        switch (uri) {
            /* Entities */
            case 'administrator': return (<Administrator datas={datas} uri={uri} />);
            case 'attraction': return (<Attraction datas={datas} uri={uri} />);
            case 'park': return (<Park datas={datas} uri={uri} />);
            case 'univers': return (<Univers datas={datas} uri={uri} />);
            case 'user': return (<User datas={datas} uri={uri} />);
            /* Attributes */
            case 'category': return (<Category datas={datas} uri={uri} />);
            case 'public': return (<Public datas={datas} uri={uri} />);
            case 'photopass': return (<Photopass datas={datas} uri={uri} />);
            case 'premieraccess': return (<Premieraccess datas={datas} uri={uri} />);
            case 'pmr': return (<Pmr datas={datas} uri={uri} />);
            case 'height': return (<Height datas={datas} uri={uri} />);
            case 'evacuation': return (<Evacuation datas={datas} uri={uri} />);
            case 'sensory': return (<Sensory datas={datas} uri={uri} />);
            case 'handicap': return (<Handicap  datas={datas} uri={uri} />);
            case 'interest': return (<Interest datas={datas} uri={uri} />);
            default: return(<Attraction datas={datas} uri={uri} />)
        }
    }
    return (
        <div className="admin">
            <div className="insert"><a href={`/admin/entity/insert/${props.uri}`} alt="insert">Insert</a></div>
            <div className="title">
                <div>ADMIN:<span>{props.uri}</span></div>
            </div>
            <THead uri={props.uri} />
            <div className="list">
                {switchComponentList()}
            </div>
        </div>
    )
}