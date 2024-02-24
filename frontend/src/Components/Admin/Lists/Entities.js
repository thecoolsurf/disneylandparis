import { BtnDelete } from "../Items/BtnDelete.js";
import { BtnUpdate } from "../Items/BtnUpdate.js";

export const Entities = (props) => {

    switch (props.uri) {
        case 'administrator':
        case 'user':
            return (
                props.datas.map((e, index) => {
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
        case 'attraction':
            return (
                props.datas.map((e, index) => {
                    return (
                        <div className="rows">
                            <div className="id">{index}</div>
                            <div className="item">{e.name} ({e.id})</div>
                            <div className="item">{e.cname}</div>
                            <div className="item">{e.pname}</div>
                            <div className="item">{e.uname}</div>
                            <BtnDelete id={e.id} uri={props.uri} />
                            <BtnUpdate id={e.id} uri={props.uri} />
                        </div>
                    )
                })
            )
        case 'park':
        case 'univers':
            return (
                props.datas.map((e, index) => {
                    return (
                        <div key={e.id} className="rows">
                            <div className="id">{index}</div>
                            <div className="item">{e.name} ({e.id})</div>
                            <div className="item">{e.route}</div>
                            <BtnDelete id={e.id} uri={props.uri} />
                            <BtnUpdate id={e.id} uri={props.uri} />
                        </div>
                    )
                }))
        default:
            return (
                <></>
            )

    }
}
