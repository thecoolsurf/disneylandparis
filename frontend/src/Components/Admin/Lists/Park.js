import { BtnDelete } from "../BtnDelete.js";
import { BtnUpdate } from "../BtnUpdate.js";

export const Park = (props) => {
    return (
        <div key={props.e.id} className="rows">
            <div className="id">{props.e.id}</div>
            <div className="item">{props.e.name}</div>
            <BtnDelete id={props.e.id} uri={props.uri} />
            <BtnUpdate id={props.e.id} uri={props.uri} />
        </div>
    )
}