import { BlockCollection } from './BlockCollection.js';
import { BlockCategories } from './BlockCategories.js';
import { BlockAttraction } from './BlockAttraction.js';
import { BlockTotal } from './BlockTotal.js';

export const BlockInfos = (props) => {
    const uri = window.location.href;
    const univers = props.univers ? props.univers : [];
    const attractions = props.attractions ? props.attractions : [];
    const categories = props.categories ? props.categories : [];
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
                <BlockCategories label="park-categories" datas={categories} />
                <BlockTotal label="attractions" total={attractions.length} />
                <BlockCollection label="attraction-link" datas={attractions} />
            </ul>
        )
    }
    /* univers page */
    if (uri.includes('univers') && !uri.includes('attraction')) {
        return (
            <ul className="list">
                <BlockCategories label="univers-categories" datas={categories} />
                <BlockTotal label="attractions" total={attractions.length} />
                <BlockCollection label="attraction-link" datas={attractions} />
            </ul>
        )
    }
    /* attraction page */
    if (uri.includes('attraction')) {
        return (
            <ul key="list" className="list">
                <BlockAttraction datas={attractions} />
            </ul>
        )

    }
}