import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Navigation.js";
import { Administrator } from "../../Components/Admin/Lists/Administrator.js";
import { Attraction } from "../../Components/Admin/Lists/Attraction.js";
import { Park } from "../../Components/Admin/Lists/Park.js";
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
    return (
        <div className="admin">
            <Navigation data={props.nav} />
            <div className="title">
                <div className="btn"><button name="insert">Insert</button></div>
                <div>ADMIN:<span>{props.uri}</span></div>
            </div>
            <div className="list">
                {datas.map((el) => {
                    console.log(el);
                    switch (props.uri) {
                        case 'administrator':
                            return (<Administrator key={el} e={el} uri={props.uri} />)
                        case 'attraction':
                            return (<Attraction key={el} e={el} uri={props.uri} />)
                        case 'park':
                            return (<Park key={el} e={el} uri={props.uri} />)
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