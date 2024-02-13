
import { BtnDelete } from "../../Items/BtnDelete.js";
import { BtnUpdate } from "../../Items/BtnUpdate.js";

export const Evacuation = (props) => {
    const chooser = [
        {id:1, name:'Evacuation facile'},
        {id:2, name:'Evacuation difficile'},
        {id:3, name:'Evacuation complexe'}
    ]
    return (
        props.datas.map((e) => {
            return (
                <div key={e.id} className="rows">
                    <div className="id">{e.id}</div>
                    <div className="item">{chooser[e.level-1].name}</div>
                    <div className="item">{e.description.slice(0,30)+'...'}</div>
                    <BtnDelete id={e.id} uri={props.uri} />
                    <BtnUpdate id={e.id} uri={props.uri} />
                </div>
            )
        }))
}