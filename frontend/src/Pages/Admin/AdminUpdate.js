import '../../assets/css/admin/admin.css';
import '../../assets/css/admin/form.css';
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Navigation.js";
import { Fields_Administrator } from "../../Components/Admin/Fields_Administrator.js";
import { Fields_Attraction } from "../../Components/Admin/Fields_Attraction.js";
import { Fields_Park } from "../../Components/Admin/Fields_Park.js";
import { Fields_Univers } from "../../Components/Admin/Fields_Univers.js";
import { Fields_User } from "../../Components/Admin/Fields_User.js";

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
                                return (<Fields_Administrator e={e} />)
                            case 'attraction':
                                return (<Fields_Attraction e={e} />)
                            case 'park':
                                return (<Fields_Park e={e} />)
                            case 'univers':
                                return (<Fields_Univers e={e} />)
                            case 'user':
                                return (<Fields_User e={e} />)
                        }
                    })}
                    <input type="submit" value="Update" />
                </fieldset>
            </form>
        </div>
    )
}