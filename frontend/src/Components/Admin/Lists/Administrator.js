import { BtnDelete } from "../BtnDelete.js";
import { BtnUpdate } from "../BtnUpdate.js";

export const Administrator = (props) => {
    return (
        <div className="rows">
            <div className="id">{props.e.id}</div>
            <div className="item">{props.e.firstname}</div>
            <div className="item">{props.e.lastname}</div>
            <BtnDelete id={props.e.id} uri={props.uri} />
            <BtnUpdate id={props.e.id} uri={props.uri} />
        </div>
    )
}