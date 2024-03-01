import { Select } from '../../Form/Inputs/Select.js';
import { Text } from '../../Form/Inputs/Text.js';
import { Textarea } from '../../Form/Inputs/Textarea.js';
import { Hidden } from '../../Form/Inputs/Hidden.js';
import { useState, useEffect } from 'react';

export const Univers = (props) => {
    const id_park = (props.e) ? props.e.id_park : '';
    const slug = (props.e) ? props.e.slug : '';
    const route = (props.e) ? props.e.route : '';
    const name = (props.e) ? props.e.name : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    const [parkChooser, setParkChooser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasParks = await fetch(`http://localhost:80/admin/collection/park`);
            const parkChooser = await datasParks.json();
            setParkChooser(parkChooser);
        };
        fetchData();
    }, []);
    return (
        <>
            <Select name="id_park" chooser={parkChooser} value={id_park} />
            <Text name="name" value={name} />
            <Text name="slug" value={slug} />
            <Text name="route" value={route} />
            <Textarea name="description" value={description} />
            <Hidden name="id" value={id} />
        </>
    )
}