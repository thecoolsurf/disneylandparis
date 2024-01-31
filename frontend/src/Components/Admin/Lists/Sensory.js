import { BtnDelete } from "../Others/BtnDelete.js";
import { BtnUpdate } from "../Others/BtnUpdate.js";

export const Sensory = (props) => {
    const chooser = [
        {id:1, name:'Faible'},
        {id:2, name:'Moyenne'},
        {id:3, name:'Forte'},
        {id:4, name:'Très forte'},
    ]
    return (
        props.datas.map((e) => {
            return (
                <div key={e.id} className="rows">
                    <div className="id">{e.id}</div>
                    <div className="item">{chooser[e.level-1].name}</div>
                    <div className="item">{e.description}</div>
                    <BtnDelete id={e.id} uri={props.uri} />
                    <BtnUpdate id={e.id} uri={props.uri} />
                </div>
            )
        })
    )
}