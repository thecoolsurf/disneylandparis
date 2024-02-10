import { BtnDelete } from "../Items/BtnDelete.js";
import { BtnUpdate } from "../Items/BtnUpdate.js";

export const User = (props) => {
    return (
        props.datas.map((e) => {
            return (
                <div key={e.id} className="rows">
                    <div className="id">{e.id}</div>
                    <div className="item">{e.lastname}</div>
                    <div className="item">{e.firstname}</div>
                    <BtnDelete id={e.id} uri={props.uri} />
                    <BtnUpdate id={e.id} uri={props.uri} />
                </div>
            )
        })
    )
}