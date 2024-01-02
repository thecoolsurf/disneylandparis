import './search.css';
import { useState } from 'react';

export const Search = (props) => {
    const [search, setSearch] = useState('');
    const str_infos = props.datas.length + (props.datas.length > 1 ? ' attractions' : ' attraction');
    return (
        <div className="search">
            <div className="theme">
                <div className="park">{props.pname}</div>
                <div className="univers">{props.name}</div>
                <div className="infos">{str_infos}</div>
            </div>
            <div className="searchbox">
                <input type="text" max="50" value={search} name="search" onChange={(e) => { setSearch(e.target.value) }} />
                <i className="fa fa-search"></i>
            </div>
        </div>
    )
}