import { BtnDelete } from "../Others/BtnDelete.js";
import { BtnUpdate } from "../Others/BtnUpdate.js";

export const ListHandicap = (props) => {
    return (
        props.datas.map((e) => {
            return (
                <div key={e.id} className="rows">
                    <div className="id">{e.id}</div>
                    <div className="item">{e.description}</div>
                    <BtnDelete id={e.id} uri={props.uri} />
                    <BtnUpdate id={e.id} uri={props.uri} />
                </div>
            )
        }))
}