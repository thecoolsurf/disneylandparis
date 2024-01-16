import './admin.css'
import { Navigation } from "./Navigation.js";

export const AdminUpdate = (props) => {
    console.log(props.datas);
    return (
        <div className="admin">
            <Navigation entities={props.entities} />
            <div className="title">
                <div className="btn"><button name="insert">Insert</button></div>
                <div>UPDATE:<span>{props.uri}</span></div>
            </div>
            <div className="list">
            </div>
        </div>
    )
}