import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Navigation.js";
import { List_Administrator } from "../../Components/Admin/List_Administrator.js";
import { List_Attraction } from "../../Components/Admin/List_Attraction.js";
import { List_Park } from "../../Components/Admin/List_Park.js";
import { List_Univers } from "../../Components/Admin/List_Univers.js";
import { List_User } from "../../Components/Admin/List_User.js";

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
                            return (<List_Administrator e={el} uri={uri} />)
                        case 'attraction':
                            return (<List_Attraction e={el} uri={uri} />)
                        case 'park':
                            return (<List_Park e={el} uri={uri} />)
                        case 'univers':
                            return (<List_Univers e={el} uri={uri} />)
                        case 'user':
                            return (<List_User e={el} uri={uri} />)
                        default:
                            return (<List_Park e={el} uri={uri} />)
                    }
                })}
            </div>
        </div>
    )
}