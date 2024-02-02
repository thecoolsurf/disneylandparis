import { BlockLabelName } from './BlockLabelName.js';
/*
@params univers array
@param attrations array
@param href string
*/
export const BlockInfos = (props) => {
    const uri = window.location.href;
    const univers = props.univers ? props.univers : [];
    const attractions = props.attractions ? props.attractions : [];
    return (
        <ul className="list">
            <li className="total">
                <div>{univers.length + ' univers'}</div>
            </li>
            <li className="items-1">
                {univers.map((u) => {
                    return (
                        <div key={u.uslug}>{u.uname}</div>
                    )
                })}
            </li>
            <li className="total">
                <div>{attractions.length + ' attractions'}</div>
            </li>
            <li className="items-2">
                {attractions.map((a) => {
                    if (uri.includes('attraction')) {
                        return (
                            <>
                                <BlockLabelName label="Nom" name={a.aname} />
                                <BlockLabelName label="Public" name={a.public} />
                                <BlockLabelName label="Interet" name={a.idescription} />
                                <BlockLabelName label="Restriction" name={a.hdescription} />
                                <BlockLabelName label="Securite" name={a.edescription} />
                                <BlockLabelName label="Sensation" name={a.sdescription} />
                                <BlockLabelName label="Handicap" name={a.hhdescription} />
                            </>
                        )
                    } else {
                        return (
                            <div key={a.aslug}>{a.aname}</div>
                        )
                    }
                })}
            </li>
            <li>
                <a className="back" href={props.href}><i className="fa fa-reply"></i></a>
            </li>
        </ul>
    )
}