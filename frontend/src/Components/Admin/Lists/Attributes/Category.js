import { BtnDelete } from "../../Items/BtnDelete.js";
import { BtnUpdate } from "../../Items/BtnUpdate.js";

export const Category = (props) => {
    return (
        props.datas.map((e) => {
            return (
                <div key={e.id} className="rows">
                    <div className="id">{e.id}</div>
                    <div className="item">{e.name}</div>
                    <div className="item">{e.slug}</div>
                    <BtnDelete id={e.id} uri={props.uri} />
                    <BtnUpdate id={e.id} uri={props.uri} />
                </div>
            )
        }))
}