import { BtnDelete } from "../../Items/BtnDelete.js";
import { BtnUpdate } from "../../Items/BtnUpdate.js";

export const Attraction = (props) => {
    return (
        props.datas.map((e) => {
            return (
                <div className="rows">
                    <div className="id">{e.id}</div>
                    <div className="item">{e.name}</div>
                    <div className="item">{e.cname}</div>
                    <div className="item">{e.pname}</div>
                    <div className="item">{e.uname}</div>
                    <BtnDelete id={e.id} uri={props.uri} />
                    <BtnUpdate id={e.id} uri={props.uri} />
                </div>
            )
        })
    )
}