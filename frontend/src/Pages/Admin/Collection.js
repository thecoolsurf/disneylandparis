import './admin.css'
import { Navigation } from "./Navigation.js";

export const AdminCollection = (props) => {
    return (
        <div className="admin">
            <Navigation entities={props.entities} />
            <div className="title">
                <div className="btn"><button name="insert">Insert</button></div>
                <div>ADMIN:<span>{props.uri}</span></div>
            </div>
            <div className="list">
                {props.datas.map((e) => {
                    return (
                        <div key={e.id} className="row">
                            <div className="id">{e.id}</div>
                            <div className="item">{e.name}</div>
                            <div className="btn">
                                <a href={'/admin/delete?uri='+props.uri+'&id='+e.id}>Delete</a>
                            </div>
                            <div className="btn">
                                <a href={'/admin/update?uri='+props.uri}>Update</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}