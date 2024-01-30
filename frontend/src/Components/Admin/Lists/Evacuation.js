
import { BtnDelete } from "../Others/BtnDelete.js";
import { BtnUpdate } from "../Others/BtnUpdate.js";

export const Evacuation = (props) => {
    return (
        <div key={props.e.id} className="rows">
            <div className="id">{props.e.id}</div>
            <div className="item">{props.e.level}</div>
            <div className="item">{props.e.description}</div>
            <BtnDelete id={props.e.id} uri={props.uri} />
            <BtnUpdate id={props.e.id} uri={props.uri} />
        </div>
    )
}