import { BlockLabelName } from './BlockLabelName.js';
import { BlockCollection } from './BlockCollection.js';
import { BlockTotal } from './BlockTotal.js';
import { BlockBack } from './BlockBack.js';

/*
@props univers array
@props attrations array
@props href string
*/
export const BlockInfos = (props) => {
    const uri = window.location.href;
    const univers = props.univers ? props.univers : [];
    const attractions = props.attractions ? props.attractions : [];
    if (uri.includes('attraction')) {
        return (
            <ul className="list">
                {attractions.map((a) => {
                    return (
                        <li className="items-2">
                            <BlockLabelName label="Nom" name={a.aname} />
                            <BlockLabelName label="Public" name={a.public} />
                            <BlockLabelName label="Interet" name={a.idescription} />
                            <BlockLabelName label="Restriction" name={a.hdescription} />
                            <BlockLabelName label="Securite" name={a.edescription} />
                            <BlockLabelName label="Sensation" name={a.sdescription} />
                            <BlockLabelName label="Handicap" name={a.hhdescription} />
                        </li>
                    )
                })}
                <BlockBack href={props.href} />
            </ul>
        )
    } else if (uri.includes('univers')) {
        return (
            <ul className="list">
                <BlockTotal label="univers" total={univers.length} />
                <BlockCollection label="univers" datas={univers} />
                <BlockTotal label="attractions" total={attractions.length} />
                <BlockCollection label="attraction" datas={attractions} />
                <BlockBack href={props.href} />
            </ul>
        )
    } else if (uri.includes('park')) {
        return(
            <ul className="list">
                <BlockTotal label="univers" total={univers.length} />
                <BlockCollection label="univers-link" datas={univers} />
                <BlockTotal label="attractions" total={attractions.length} />
                <BlockCollection label="attraction" datas={attractions} />
                <BlockBack href={props.href} />
            </ul>
        )
        
    } else {
        return (
            <ul className="list">
                <BlockTotal label="univers" total={univers.length} />
                <BlockCollection label="univers" datas={univers} />
                <BlockTotal label="attractions" total={attractions.length} />
                <BlockBack href={props.href} />
            </ul>
        )
    }
}