import {Button_Delete } from "./Button_Delete.js";
import {Button_Update } from "./Button_Update.js";

export const List_Park = (props) => {
    return (
        <div key={props.e.id} className="row">
            <div className="id">{props.e.id}</div>
            <div className="item">{props.e.name}</div>
            <Button_Delete id={props.e.id} uri={props.uri} />
            <Button_Update id={props.e.id} uri={props.uri} />
        </div>
    )
}