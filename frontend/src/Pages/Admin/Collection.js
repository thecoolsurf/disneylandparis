import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Others/Navigation.js";
/* entity */
import { Administrator } from "../../Components/Admin/Lists/Administrator.js";
import { Attraction } from "../../Components/Admin/Lists/Attraction.js";
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
    const link_insert = `/admin/entity/insert/${props.uri}`;
    useEffect(() => {
        const fetchData = async () => {
            const dataAdmin = await fetch(`http://localhost:80/admin/collection/${props.uri}`);
            const datas = await dataAdmin.json();
            setDatas(datas);
        };
        fetchData();
    }, []);
    return (
        <div className="admin">
            <Navigation data={props.nav} />
            <div className="title">
                <div className="btn"><a href={link_insert} alt="insert">Insert row</a></div>
                <div>ADMIN:<span>{props.uri}</span></div>
            </div>
            <div className="thead">
                <div className="id">id</div>
                <div className="item">name</div>
            </div>
            <div className="list">
                {datas.map((el) => {
                    switch (props.uri) {
                        case 'administrator':
                            return (<Administrator key={el} e={el} uri={props.uri} />)
                        case 'attraction':
                            return (<Attraction key={el} e={el} uri={props.uri} />)
                        case 'evacuation':
                            return (<Evacuation key={el} e={el} uri={props.uri} />)
                        case 'handicap':
                            return (<Handicap key={el} e={el} uri={props.uri} />)
                        case 'height':
                            return (<Height key={el} e={el} uri={props.uri} />)
                        case 'Interest':
                            return (<Interest key={el} e={el} uri={props.uri} />)
                        case 'park':
                            return (<Park key={el} e={el} uri={props.uri} />)
                        case 'sensory':
                            return (<Sensory key={el} e={el} uri={props.uri} />)
                        case 'univers':
                            return (<Univers key={el} e={el} uri={props.uri} />)
                        case 'user':
                            return (<User key={el} e={el} uri={props.uri} />)
                        default:
                            return (<Park key={el} e={el} uri={props.uri} />)
                    }
                })}
            </div>
        </div>
    )
}