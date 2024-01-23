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
    const url = window.location.href;
    const id = url.includes('?') ? url.split('?')[1].slice(3,) : 1;
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasUpdate = await fetch(`http://localhost:80/admin/form/${props.uri}?id=${id}`);
            const datas = await datasUpdate.json();
            setDatas(datas);
        };
        fetchData();
    }, []);
    return (
        <div className="admin">
            <Navigation data={props.nav} />
            <form action={'/admin/update/' + props.uri} method="POST" encType="application/x-www-form-urlencoded">
                <fieldset>
                    <legend>UPDATE:<span>{props.uri}</span></legend>
                    {datas.map((el) => {
                        switch (props.uri) {
                            case 'administrator':
                                return (<Administrator key={el} e={el} />)
                            case 'attraction':
                                return (<Attraction key={el} e={el} />)
                            case 'park':
                                return (<Park key={el} e={el} />)
                            case 'univers':
                                return (<Univers key={el} e={el} />)
                            case 'user':
                                return (<User key={el} e={el} />)
                        }
                    })}
                    <input type="submit" value="Update" />
                </fieldset>
            </form>
        </div>
    )
}