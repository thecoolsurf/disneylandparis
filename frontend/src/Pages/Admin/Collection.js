import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';
import { THead } from '../../Components/Admin/Items/THead.js';
import { Entities } from '../../Components/Admin/Lists/Entities.js';
import { Attributes } from '../../Components/Admin/Lists/Attributes.js';

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
            <div className="insert"><a href={`/admin/entity/insert/${props.uri}`} alt="insert">Insert</a></div>
            <div className="title">
                <div>ADMIN:<span>{props.uri}</span></div>
            </div>
            <div className="list">
                <THead uri={props.uri} />
                <Entities datas={datas} uri={props.uri} />
                <Attributes datas={datas} uri={props.uri} />
            </div>
        </div>
    )
}