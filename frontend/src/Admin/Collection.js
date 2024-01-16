import '../Admin/admin.css'
import { Navigation } from "./Navigation.js";

export const AdminCollection = (props) => {
    return (
        <div className="admin">
            <Navigation entities={props.entities} />
            <div className="title">{'ADMIN: ' + props.uri} <button>Insert</button></div>
            <div className="list">
                {props.datas.map((e) => {
                    return (
                        <div key={e.id} className="row">
                            <div className="id">{e.id}</div>
                            <div className="item">{e.name}</div>
                            <div className="buttons"><button>Update</button></div>
                            <div className="buttons"><button>Delete</button></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}