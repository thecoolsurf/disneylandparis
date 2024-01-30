import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Others/Navigation.js";
/* entity */
import { HeadAdministrator } from "../../Components/Admin/Columns/Administrator.js";
import { ListAdministrator } from "../../Components/Admin/Lists/Administrator.js";
import { HeadAttraction } from "../../Components/Admin/Columns/Attraction.js";
import { ListAttraction } from "../../Components/Admin/Lists/Attraction.js";
import { ListEvacuation } from "../../Components/Admin/Lists/Evacuation.js";
import { ListHandicap } from "../../Components/Admin/Lists/Handicap.js";
import { ListHeight } from "../../Components/Admin/Lists/Height.js";
import { ListInterest } from "../../Components/Admin/Lists/Interest.js";
import { ListPark } from "../../Components/Admin/Lists/Park.js";
import { ListSensory } from "../../Components/Admin/Lists/Sensory.js";
import { ListUnivers } from "../../Components/Admin/Lists/Univers.js";
import { ListUser } from "../../Components/Admin/Lists/User.js";

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
    const switchComponentHead = () => {
        const uri = props.uri;
        switch (uri) {
            case 'administrator': return (<HeadAdministrator />);
        }
    }
    const switchComponentList = () => {
        const uri = props.uri;
        switch (uri) {
            case 'administrator': return (<ListAdministrator datas={datas} uri={uri} />);
            case 'attraction': return (<ListAttraction datas={datas} uri={uri} />);
            case 'evacuation': return (<ListEvacuation datas={datas} uri={uri} />);
            case 'handicap': return (<ListHandicap  datas={datas} uri={uri} />);
            case 'height': return (<ListHeight datas={datas} uri={uri} />);
            case 'interest': return (<ListInterest datas={datas} uri={uri} />);
            case 'park': return (<ListPark datas={datas} uri={uri} />);
            case 'sensory': return (<ListSensory datas={datas} uri={uri} />);
            case 'univers': return (<ListUnivers datas={datas} uri={uri} />);
            case 'user': return (<ListUser datas={datas} uri={uri} />);
        }
    }
    return (
        <div className="admin">
            <Navigation data={props.nav} />
            <div className="title">
                <div className="btn"><a href={`/admin/entity/insert${props.uri}`} alt="insert">Insert row</a></div>
                <div>ADMIN:<span>{props.uri}</span></div>
            </div>
            <div className="thead">
                {switchComponentHead()}
            </div>
            <div className="list">
                {switchComponentList()}
            </div>
        </div>
    )
}