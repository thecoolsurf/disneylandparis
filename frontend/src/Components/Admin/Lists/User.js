import { BtnDelete } from "../BtnDelete.js";
import { BtnUpdate } from "../BtnUpdate.js";

export const User = (props) => {
    return (
        <div key={props.e.id} className="row">
            <div className="id">{props.e.id}</div>
            <div className="item">{props.e.firstname + ' ' + props.e.lastname}</div>
            <BtnDelete id={props.e.id} uri={props.uri} />
            <BtnUpdate id={props.e.id} uri={props.uri} />
        </div>
    )
}