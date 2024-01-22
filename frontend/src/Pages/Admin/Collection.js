import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Navigation.js";
import { List_User } from "../../Components/Admin/List_User.js";

export const AdminCollection = (props) => {
    const queryString = window.location.pathname;
    const url = window.location.href;
    const uri = url.includes('admin') ? queryString.split('/')[3] : 'park';
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
                <div>ADMIN:<span>{props.uri}</span></div>
            </div>
            <div className="list">
                {datas.map((el) => {
                    if (props.uri === 'user') {
                        return (
                            <List_User e={el} />
                        )
                    } else {
                        return (
                            <div key={el.id} className="row">
                                <div className="id">{el.id}</div>
                                <div className="item">{el.name}</div>
                                <div className="btn">
                                    <a href={'/admin/delete?uri=' + props.uri + '&id=' + el.id}>Delete</a>
                                </div>
                                <div className="btn">
                                    <a href={'/admin/update/' + props.uri + '?id=' + el.id}>Update</a>
                                </div>
                            </div>

                        )
                    }
                })}
            </div>
        </div>
    )
}