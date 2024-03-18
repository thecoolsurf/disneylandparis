import '../../assets/css/admin/admin.css';
import '../../assets/css/admin/form.css';
import { useState, useEffect } from 'react';
import { Fields } from '../../Components/Admin/Update/Fields.js';

export const AdminUpdate = (props) => {
    const legend_entity = document.getElementById('entity');
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
            <form className="form" action={`http://localhost:80/admin/update/${props.uri}`} method="POST">
                <fieldset>
                    <legend>UPDATE:<span>{props.uri}</span></legend>
                    {datas.map((el) => {
                        legend_entity.textContent = props.uri.toUpperCase() + ' - ' + el.name;
                        return (
                            <Fields key={props.uri} uri={props.uri} e={el} />
                        )
                    })}
                    <input type="submit" defaultValue="Update" />
                </fieldset>
            </form>
            <a className="back" href={`/admin/entity/collection/${props.uri}`} alt="back">
                <i className="fa fa-reply"></i>
            </a>
        </div>
    )
}