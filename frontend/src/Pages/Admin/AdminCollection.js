import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Navigation.js";
import { Administrator } from "../../Components/Admin/Lists/Administrator.js";
import { Attraction } from "../../Components/Admin/Lists/Attraction.js";
import { Park } from "../../Components/Admin/Lists/Park.js";
import { Univers } from "../../Components/Admin/Lists/Univers.js";
import { User } from "../../Components/Admin/Lists/User.js";

export const AdminCollection = (props) => {
    const queryString = window.location.pathname;
    const url = window.location.href;
    const uri = url.includes('admin') ? queryString.split('/')[4] : 'park';
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataAdmin = await fetch(`http://localhost:80/admin/collection/${uri}`);
            const datas = await dataAdmin.json();
            setDatas(datas);
        };
        fetchData();
    }, []);
    return (
        <div className="admin">
            <Navigation entities={props.entities} />
            <div className="title">
                <div className="btn"><button name="insert">Insert</button></div>
                <div>ADMIN:<span>{uri}</span></div>
            </div>
            <div className="list">
                {datas.map((el) => {
                    switch (uri) {
                        case 'administrator':
                            return (<Administrator e={el} uri={uri} />)
                        case 'attraction':
                            return (<Attraction e={el} uri={uri} />)
                        case 'park':
                            return (<Park e={el} uri={uri} />)
                        case 'univers':
                            return (<Univers e={el} uri={uri} />)
                        case 'user':
                            return (<User e={el} uri={uri} />)
                        default:
                            return (<Park e={el} uri={uri} />)
                    }
                })}
            </div>
        </div>
    )
}