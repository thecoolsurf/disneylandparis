import { BtnDelete } from "../Form/BtnDelete.js";
import { BtnUpdate } from "../Form/BtnUpdate.js";

export const Attributes = (props) => {

    switch (props.uri) {
        case 'category':
        case 'evacuation':
        case 'handicap':
        case 'height':
        case 'interest':
        case 'photopass':
        case 'pmr':
        case 'premieraccess':
        case 'public':
        case 'sensory':
        case 'singlerider':
            return (
                props.datas.map((e,index) => {
                    return (
                        <div key={e.id} className="rows">
                            <div className="id">{index+1}</div>
                            <div className="item">{e.name} ({e.id})</div>
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