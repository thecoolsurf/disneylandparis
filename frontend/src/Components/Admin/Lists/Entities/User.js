import { BtnDelete } from "../../Items/BtnDelete.js";
import { BtnUpdate } from "../../Items/BtnUpdate.js";

export const User = (props) => {
    return (
        props.datas.map((e,index) => {
            return (
                <div key={e.id} className="rows">
                    <div className="id">{index}</div>
                    <div className="item">{e.firstname} ({e.id})</div>
                    <BtnDelete id={e.id} uri={props.uri} />
                    <BtnUpdate id={e.id} uri={props.uri} />
                </div>
            )
        })
    )
}