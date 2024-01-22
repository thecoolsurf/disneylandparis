import '../../assets/css/admin/admin.css';
import '../../assets/css/admin/form.css';
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Navigation.js";
import { Administrator } from "../../Components/Admin/Fields/Administrator.js";
import { Attraction } from "../../Components/Admin/Fields/Attraction.js";
import { Park } from "../../Components/Admin/Fields/Park.js";
import { Univers } from "../../Components/Admin/Fields/Univers.js";
import { User } from "../../Components/Admin/Fields/User.js";

export const AdminUpdate = (props) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasUpdate = await fetch(`http://localhost:80/admin/form/${uri}?id=${id}`);
            const datas = await datasUpdate.json();
            setDatas(datas);
        };
        fetchData();
    }, []);
    const queryString = window.location.pathname;
    const url = window.location.href;
    const uri = url.includes('admin') ? queryString.split('/')[4] : 'park';
    const id = url.includes('?') ? url.split('?')[1].slice(3,) : 0;
    console.log(uri)
    return (
        <div className="admin">
            <Navigation entities={props.entities} />
            <form action={'/admin/update/' + props.uri} method="POST" enctype="application/x-www-form-urlencoded">
                <fieldset>
                    <legend>UPDATE:<span>{props.uri}</span></legend>
                    {datas.map((e) => {
                        switch (props.uri) {
                            case 'administrator':
                                return (<Administrator e={e} />)
                            case 'attraction':
                                return (<Attraction e={e} />)
                            case 'park':
                                return (<Park e={e} />)
                            case 'univers':
                                return (<Univers e={e} />)
                            case 'user':
                                return (<User e={e} />)
                        }
                    })}
                    <input type="submit" value="Update" />
                </fieldset>
            </form>
        </div>
    )
}