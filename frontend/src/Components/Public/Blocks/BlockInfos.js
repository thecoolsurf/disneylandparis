import { BlockLabelName } from './BlockLabelName.js';
import { BlockCollection } from './BlockCollection.js';
import { BlockTotal } from './BlockTotal.js';
import { BlockBack } from './BlockBack.js';

/*
@props href string
@props univers array
@props attrations array
*/
export const BlockInfos = (props) => {
    const uri = window.location.href;
    const univers = props.univers ? props.univers : [];
    const attractions = props.attractions ? props.attractions : [];
    /* home page */
    if (!uri.includes('park') && !uri.includes('univers') && !uri.includes('attractions')) {
        return (
            <ul className="list">
                <BlockTotal label="univers" total={univers.length} />
                <BlockCollection label="univers-link" datas={univers} />
                <BlockTotal label="attractions" total={attractions.length} />
            </ul>
        )
    }
    /* park page */
    if (uri.includes('park') && !uri.includes('univers')) {
        return(
            <ul className="list">
                <BlockTotal label="univers" total={univers.length} />
                <BlockCollection label="univers-link" datas={univers} />
                <BlockTotal label="attractions" total={attractions.length} />
                <BlockCollection label="attraction-link" datas={attractions} />
                <BlockBack back={props.back} />
            </ul>
        )
    }
    /* univers page */
    if (uri.includes('univers') && !uri.includes('attraction')) {
        return (
            <ul className="list">
                <BlockTotal label="attractions" total={attractions.length} />
                <BlockCollection label="attraction-link" datas={attractions} />
                <BlockBack back={props.back} />
            </ul>
        )
    }
    /* attraction page */
    if (uri.includes('attraction')) {
        return (
            <ul key="list" className="list">
                {attractions.map((a) => {
                    return (
                        <>
                            <BlockLabelName label="Categorie" name={a.cname} />
                            <BlockLabelName label="Public" name={a.public} />
                            <BlockLabelName label="Interet" name={a.interet_description} />
                            <BlockLabelName label="Taille" name={a.height_description} />
                            <BlockLabelName label="Evacuation" name={a.evacuation_description} />
                            <BlockLabelName label="Sensation" name={a.sensory_description} />
                            <BlockLabelName label="Handicap" name={a.handicap_description} />
                        </>
                    )
                })}
                <BlockBack back={props.back} />
            </ul>
        )

    }
}