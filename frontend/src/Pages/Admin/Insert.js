import '../../assets/css/admin/admin.css';
import '../../assets/css/admin/form.css';
import { useState, useEffect } from 'react';
import { Administrator } from "../../Components/Admin/Fields/Administrator.js";
import { Attraction } from "../../Components/Admin/Fields/Attraction.js";
import { Evacuation } from "../../Components/Admin/Fields/Evacuation.js";
import { Handicap } from "../../Components/Admin/Fields/Handicap.js";
import { Height } from "../../Components/Admin/Fields/Height.js";
import { Interest } from "../../Components/Admin/Fields/Interest.js";
import { Park } from "../../Components/Admin/Fields/Park.js";
import { Sensory } from "../../Components/Admin/Fields/Sensory.js";
import { Univers } from "../../Components/Admin/Fields/Univers.js";
import { User } from "../../Components/Admin/Fields/User.js";

export const AdminInsert = (props) => {
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
            <form className="form" action={`http://localhost:80/admin/insert/${props.uri}`} method="POST">
                <fieldset>
                    <legend>INSERT:<span>{props.uri}</span></legend>
                    {datas.map((el) => {
                        switch (props.uri) {
                            case 'administrator':
                                return (<Administrator key={el} />)
                            case 'attraction':
                                return (<Attraction key={el} />)
                            case 'evacuation':
                                return (<Evacuation key={el} />)
                            case 'handicap':
                                return (<Handicap key={el} />)
                            case 'height':
                                return (<Height key={el} />)
                            case 'interest':
                                return (<Interest key={el} />)
                            case 'park':
                                return (<Park key={el} />)
                            case 'sensory':
                                return (<Sensory key={el} />)
                            case 'univers':
                                return (<Univers key={el} />)
                            case 'user':
                                return (<User key={el} />)
                        }
                    })}
                    <input type="submit" defaultValue="Insert" />
                </fieldset>
            </form>
        </div>
    )
}