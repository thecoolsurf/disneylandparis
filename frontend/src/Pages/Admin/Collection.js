import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { THead } from '../../Components/Admin/Others/THead.js';
/* entity */
import { Administrator } from "../../Components/Admin/Lists/Administrator.js";
import { Attraction } from "../../Components/Admin/Lists/Attraction.js";
import { Category } from "../../Components/Admin/Lists/Category.js";
import { Evacuation } from "../../Components/Admin/Lists/Evacuation.js";
import { Handicap } from "../../Components/Admin/Lists/Handicap.js";
import { Height } from "../../Components/Admin/Lists/Height.js";
import { Interest } from "../../Components/Admin/Lists/Interest.js";
import { Park } from "../../Components/Admin/Lists/Park.js";
import { Sensory } from "../../Components/Admin/Lists/Sensory.js";
import { Univers } from "../../Components/Admin/Lists/Univers.js";
import { User } from "../../Components/Admin/Lists/User.js";

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
            case 'administrator': return (<Administrator datas={datas} uri={uri} />);
            case 'attraction': return (<Attraction datas={datas} uri={uri} />);
            case 'category': return (<Category datas={datas} uri={uri} />);
            case 'evacuation': return (<Evacuation datas={datas} uri={uri} />);
            case 'handicap': return (<Handicap  datas={datas} uri={uri} />);
            case 'height': return (<Height datas={datas} uri={uri} />);
            case 'interest': return (<Interest datas={datas} uri={uri} />);
            case 'park': return (<Park datas={datas} uri={uri} />);
            case 'sensory': return (<Sensory datas={datas} uri={uri} />);
            case 'univers': return (<Univers datas={datas} uri={uri} />);
            case 'user': return (<User datas={datas} uri={uri} />);
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