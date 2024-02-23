import { BtnDelete } from "../../Items/BtnDelete.js";
import { BtnUpdate } from "../../Items/BtnUpdate.js";

export const Administrator = (props) => {
    return (
        props.datas.map((e,index) => {
            return (
                <div className="rows">
                    <div className="id">{index}</div>
                    <div className="item">{e.firstname} ({e.id})</div>
                    <div className="item">{e.lastname}</div>
                    <BtnDelete id={e.id} uri={props.uri} />
                    <BtnUpdate id={e.id} uri={props.uri} />
                </div>

            )
        })
    )
}
